/**
 * @class UnoptimizedBuildingService - This class is used to calculate the rain surface of a list of buildings in an unoptimized way
 */
export class UnoptimizedBuildingService {
    private readonly _buildingsHeightList: number[];
    private readonly _maxBuildingHeight: number;

    /**
     * @description - This method is used to initialize the class
     * @param buildingsHeightList - The list of buildings heights inf a form of an 1D-array
     */
    constructor(buildingsHeightList: number[]) {
        this._buildingsHeightList = buildingsHeightList;
        this._maxBuildingHeight = Math.max(...buildingsHeightList);
    }

    /**
     * @description - This method is used to verify if the number of buildings is too small to contain any rain surface
     * @returns {boolean} - true if the number of buildings is too small, false otherwise
     * @private
     */
    private _verifyTooSmall(): boolean {
        return this._buildingsHeightList.length <= 2;
    }

    /**
     * @description - This method is used to verify if a cell is a building
     * @param height - The height of the cell (pseudo y-axis)
     * @param cellIndex - The index of the cell (pseudo x-axis)
     * @returns {boolean} - true if the cell is a building, false if the cell is empty
     * @private
     */
    private _isCellBuilding(height: number, cellIndex: number): boolean {
        return height <= this._buildingsHeightList[cellIndex];
    }

    /**
     * @description - This method is used to verify if there is a solid cell (a building) on the left of the current cell to retain water
     * @param currentHeight - The height of the current cell (pseudo y-axis)
     * @param cellIndex - The index of the current cell (pseudo x-axis)
     * @returns {boolean} - true if there is a solid cell on the left, false otherwise
     * @private
     */
    private _verifyLeftCells(currentHeight: number, cellIndex: number): boolean {
        for (let i = 1; i <= cellIndex; i++) {
            if (this._isCellBuilding(currentHeight, cellIndex - i)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @description - This method is used to verify if there is a solid cell (a building) on the right of the current cell to retain water
     * @param currentHeight - The height of the current cell (pseudo y-axis)
     * @param cellIndex - The index of the current cell (pseudo x-axis)
     * @returns {boolean} - true if there is a solid cell on the right, false otherwise
     * @private
     */
    private _verifyRightCells(currentHeight: number, cellIndex: number): boolean {
        for (let i = 0; (i + cellIndex) < this._buildingsHeightList.length; i++) {
            if (this._isCellBuilding(currentHeight, cellIndex + i)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @description - This method is used to determine if water is retained in a cell
     * @param currentHeight - The height of the current cell (pseudo y-axis)
     * @param cellIndex - The index of the current cell (pseudo x-axis)
     * @returns {boolean} - true if water is retained, false otherwise
     * @private
     */
    private _determineCell(currentHeight: number, cellIndex: number) : boolean {
        return this._verifyLeftCells(currentHeight, cellIndex) && this._verifyRightCells(currentHeight, cellIndex);
    }

    /**
     * @description - This method is used to calculate the rain surface of a list of buildings
     * @returns {number} - The rain surface
     */
    public getRainSurface(): number {
        if (this._verifyTooSmall())
            return 0;

        let sum = 0;

        for (let height = 1; height < this._maxBuildingHeight; height++) {
            for (let buildingIdx = 1; buildingIdx < this._buildingsHeightList.length; buildingIdx++) {
                if (!this._isCellBuilding(height, buildingIdx) && this._determineCell(height, buildingIdx))
                    sum++;
            }
        }
        return sum;
    }
}
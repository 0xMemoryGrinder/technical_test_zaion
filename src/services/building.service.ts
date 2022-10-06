/**
 * @class BuildingService - Common parent class of unoptimized and optimized building services
 */
export class BuildingService {
    protected readonly _buildingsHeightList: number[];
    protected readonly _maxBuildingHeight: number;

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
     * @protected
     */
    protected _verifyTooSmall(): boolean {
        return this._buildingsHeightList.length <= 2;
    }

    /**
     * @description - This method is used to verify if a cell is a building
     * @param height - The height of the cell (pseudo y-axis)
     * @param cellIndex - The index of the cell (pseudo x-axis)
     * @returns {boolean} - true if the cell is a building, false if the cell is empty
     * @protected
     */
    protected _isCellBuilding(height: number, cellIndex: number): boolean {
        return height <= this._buildingsHeightList[cellIndex];
    }
}
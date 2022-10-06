export class UnoptimizedBuildingService {
    private readonly _buildingsHeightList: number[];
    private readonly _maxBuildingHeight: number;

    constructor(buildingsHeightList: number[]) {
        this._buildingsHeightList = buildingsHeightList;
        this._maxBuildingHeight = Math.max(...buildingsHeightList);
    }

    private _verifyTooSmall(): boolean {
        return this._buildingsHeightList.length <= 2;
    }

    private _isCellBuilding(height: number, cellIndex: number): boolean {
        return height <= this._buildingsHeightList[cellIndex];
    }

    private _verifyLeftCells(currentHeight: number, cellIndex: number): boolean {
        for (let i = 1; i <= cellIndex; i++) {
            if (this._isCellBuilding(currentHeight, cellIndex - i)) {
                return true;
            }
        }
        return false;
    }

    private _verifyRightCells(currentHeight: number, cellIndex: number): boolean {
        for (let i = 0; (i + cellIndex) < this._buildingsHeightList.length; i++) {
            if (this._isCellBuilding(currentHeight, cellIndex + i)) {
                return true;
            }
        }
        return false;
    }

    private _determineCell(currentHeight: number, cellIndex: number) : boolean {
        return this._verifyLeftCells(currentHeight, cellIndex) && this._verifyRightCells(currentHeight, cellIndex);
    }

    public getRainSurface(): number {
        if (this._verifyTooSmall())
            return 0;

        let sum : number = 0;

        for (let height = 1; height < this._maxBuildingHeight; height++) {
            for (let buildingIdx = 1; buildingIdx < this._buildingsHeightList.length; buildingIdx++) {
                if (!this._isCellBuilding(height, buildingIdx) && this._determineCell(height, buildingIdx))
                    sum++;
            }
        }
        return sum;
    }
}
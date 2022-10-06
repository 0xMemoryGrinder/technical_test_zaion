import { BuildingService } from "./building.service";

/**
 * @class UnoptimizedBuildingService - This class is used to calculate the rain surface of a list of buildings in an unoptimized way
 */
export class OptimizedBuildingService extends BuildingService {

    /**
     * @description - This method is used to initialize the class
     * @param buildingsHeightList - The list of buildings heights inf a form of an 1D-array
     */
    constructor(buildingsHeightList: number[]) {
        super(buildingsHeightList);
    }

    private _determineRow(height: number): number {
        let nbRetainedCells = 0;
        let isRetaining = false;
        let isBuilding : boolean;

        for (let buildingIdx = 0; buildingIdx < this._buildingsHeightList.length; buildingIdx++) {
            isBuilding = this._isCellBuilding(height, buildingIdx);
            if (isBuilding && !isRetaining) {
                isRetaining = true;
            } else if (!isBuilding && isRetaining) {
                nbRetainedCells++;
            }
        }
        return nbRetainedCells;
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
            sum += this._determineRow(height);
        }
        return sum;
    }
}
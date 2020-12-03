export interface DatasetRow {
    timestamp: Date;
    stationNumber: number;
    distanceFrom36: number;
    depth: number;
    discreteChlorophyll?: number;
    chlorophyllPHA?: number;
    fluorescence?: number;
    calculatedChlorophyll?: number;
    discreteOxygen?: number;
    oxygenElectrode?: number;
    oxygenSaturationPercent?: number;
    calculatedOxygen?: number;
    discreteSPM?: number;
    opticalBackscatter?: number;
    calculatedSPM?: number;
    measuredExtinctionCoefficient?: number;
    calculatedExtinctionCoefficient?: number;
    salinity: number;
    temperature: number;
    sigmaT?: number;
    nitrite?: number;
    ammonium?: number;
    phosphate?: number;
    silicate?: number;
}

export interface TimeScatterPoint {
    x: Date;
    y: number;
}
export interface DatasetRowOld {
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

export interface DatasetRowRaw {
    month: number;
    year: number;
    "Station.Number": number;
    Depth: number;
    "Calculated.Chlorophyll": number | string;
    "Calculated.Oxygen": number | string;
    "Calculated.SPM": number | string;
    Salinity: number | string;
    Temperature: number | string;
}

export interface DatasetRow {
    month: number;
    year: number;
    station_number: number;
    chlorophyll: number;
    oxygen: number;
    spm: number;
    salinity: number;
    temperature: number;
}

export interface TimeScatterPoint {
    x: Date;
    y: number;
}

export interface Station {
    sNr: number;
    name: string;
    latitude: number;
    longitude: number;
    depth: number;
    quality?: number;
  }


  export interface DatasetRowAccumulated extends DatasetRow {
    amount: number;
  }
  
  export interface AccumulatedData {
    month: number;
    year: number;
    avgTemp: number;
    avgSPM: number;
    avgChlorophyl: number;
    avgSalinity: number;
    avgOxygen: number;
  }
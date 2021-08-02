import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type SetValue = (field: string, value: any) => void;

interface CartoLayerOptions {
  polygonColor: number[];
  strokeColor: number[];
  strokeSize: number;
}

export type { CartoLayerOptions, ChangeEvent, SetValue };

const boxLayers = [
  ...(boxPlotType !== 'tukey' ? whiskerLayers : []),
  ...makeBoxPlotBox({
    // Include any relevant comments for the makeBoxPlotBox function parameters here
  }),
];

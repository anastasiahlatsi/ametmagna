function gradient(gradientSpec, _ref3) {
    // Destructure any properties you need from the second parameter
    const { context, width, height } = _ref3;

    // Assuming gradientSpec is an object that defines the gradient details
    const { type, colors, positions } = gradientSpec;

    // Create a gradient object based on the type
    let gradient;
    if (type === 'linear') {
        gradient = context.createLinearGradient(0, 0, width, height);
    } else if (type === 'radial') {
        // Example radial gradient centered at the middle of the canvas
        gradient = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 2);
    }

    // Add color stops to the gradient
    colors.forEach((color, index) => {
        gradient.addColorStop(positions[index], color);
    });

    // Apply the gradient to the context
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
}

// Example usage:
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const gradientSpec = {
    type: 'linear',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    positions: [0, 0.5, 1]
};

const dimensions = {
    context: context,
    width: canvas.width,
    height: canvas.height
};

gradient(gradientSpec, dimensions);

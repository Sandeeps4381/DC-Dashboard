const ctx = document.getElementById('testChart').getContext('2d');
const data = {
    labels: Array.from({ length: 10 }, (_, i) => `Test ${i + 1}`),
    datasets: [
        {
            label: 'Pass',
            data: [100, 200, 150, 300, 250, 350, 400, 150, 200, 300],
            backgroundColor: 'rgba(0, 255, 0, 0.6)', // Green for pass
            borderColor: 'rgba(0, 255, 0, 1)',
            borderWidth: 1,
            barThickness: 20,
            categoryPercentage: 0.8, // Add some gap between groups
            barPercentage: 1.0
        },
        {
            label: 'Fail',
            data: [50, 100, 75, 150, 125, 175, 200, 75, 100, 150],
            backgroundColor: 'rgba(255, 0, 0, 0.6)', // Red for fail
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            barThickness: 20,
            categoryPercentage: 0.8, // Add some gap between groups
            barPercentage: 1.0
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Test Suite: 10',
                font: {
                    size: 18
                },
                padding: {
                    bottom: 20
                },
                position: 'left' // Title on the left side
            },
            legend: {
                display: false // Hide default legend
            }
        },
        scales: {
            x: {
                stacked: false,
                title: {
                    display: true,
                    text: 'Test Number'
                },
                grid: {
                    display: false
                }
            },
            y: {
                stacked: false,
                title: {
                    display: true,
                    text: 'Count'
                },
                beginAtZero: true,
                max: 500
            }
        }
    }
};

const testChart = new Chart(ctx, config);

// Create the custom legend
const legendContainer = document.createElement('div');
legendContainer.classList.add('legend-container');
document.querySelector('.chart-container').appendChild(legendContainer);

const legendItems = [
    { color: 'rgba(0, 255, 0, 0.6)', label: 'Pass' },
    { color: 'rgba(255, 0, 0, 0.6)', label: 'Fail' }
];

legendItems.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.classList.add('legend-item');
    
    const colorCircle = document.createElement('div');
    colorCircle.classList.add('legend-color');
    colorCircle.style.backgroundColor = item.color;
    
    const label = document.createElement('span');
    label.textContent = item.label;
    
    legendItem.appendChild(colorCircle);
    legendItem.appendChild(label);
    legendContainer.appendChild(legendItem);
});



//  js for automation 


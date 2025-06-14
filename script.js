document.addEventListener('DOMContentLoaded', () => {
    const robuxInput = document.getElementById('robux');
    const dollarsInput = document.getElementById('dollars');

    const ROBUX_TO_USD_RATE = 1.00; 

    function formatNumber(num) {
        if (Number.isInteger(num)) {
            return num.toString();
        }
        return num.toFixed(2);
    }

    robuxInput.addEventListener('input', () => {
        const robuxValue = parseFloat(robuxInput.value);
        if (!isNaN(robuxValue) && robuxValue >= 0) {
            dollarsInput.value = formatNumber(robuxValue * ROBUX_TO_USD_RATE);
        } else if (robuxInput.value === '') {
            dollarsInput.value = '';
        }
    });

    dollarsInput.addEventListener('input', () => {
        const dollarsValue = parseFloat(dollarsInput.value);
        if (!isNaN(dollarsValue) && dollarsValue >= 0) {
            robuxInput.value = formatNumber(dollarsValue / ROBUX_TO_USD_RATE);
        } else if (dollarsInput.value === '') {
            robuxInput.value = '';
        }
    });
});

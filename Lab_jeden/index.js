class MathApp{
    constructor() {
        this.getInputs();
        this.watchInputValues();
    }
    generateInputs(){

    }
    getInputs(){
        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');
        this.data1Output = document.querySelector('#output1');
        this.data2Output = document.querySelector('#output2');
        this.data3Output = document.querySelector('#output3');
        this.data4Output = document.querySelector('#output4');
    }
    watchInputValues(){
        this.data1Input.addEventListener('change', () => this.computeData());
        this.data2Input.addEventListener('change', () => this.computeData());
        this.data3Input.addEventListener('change', () => this.computeData());
        this.data4Input.addEventListener('change', () => this.computeData());
    }

    computeData(){
        const data = [
            this.data1Input.value = +document.querySelector('#data1').value, 
            this.data2Input.value = +document.querySelector('#data2').value,
            this.data3Input.value = +document.querySelector('#data3').value,
            this.data4Input.value = +document.querySelector('#data4').value
        ];
        let sum = data.reduce((a,b) => a + b, 0);
        let avg = sum/data.length;
        let min = Math.min.apply(Math, data);
        let max = Math.max.apply(Math, data);

        this.data1Output.value = sum;
        this.data2Output.value = avg;
        this.data3Output.value = min;
        this.data4Output.value = max;
    }


}

const app = new MathApp();
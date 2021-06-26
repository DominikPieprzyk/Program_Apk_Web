var App = /** @class */ (function () {
    function App() {
        this.dataInputsValues = [];
        this.countNumber = 0;
        this.startApp();
    }
    App.prototype.counter = function () {
        var _this = this;
        var inputsCounter = document.getElementById("inputsCounter");
        // Checking values in #inputsCounter
        inputsCounter.addEventListener("input", function (event) {
            var target = event.target;
            _this.countNumber = Number(target.value);
            console.log(_this.countNumber);
        });
    };
    App.prototype.startApp = function () {
        this.addInputs();
        this.getInputs();
        this.watchInputValues();
        this.counter();
    };
    App.prototype.addInputs = function () {
        var _this = this;
        var container = document.querySelector(".input-data-box");
        this.addButton = document.querySelector("#addInputs");
        // Returns true if the specified node has any child nodes
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            this.inputArray = [];
        }
        for (var index = 0; index < this.countNumber.valueOf(); index++) {
            var input = document.createElement("input");
            input.type = "text";
            input.autocomplete = "off";
            input.setAttribute("id", "data" + (index + 1));
            input.className = "data";
            container.appendChild(input);
            this.inputArray.push(input);
            input.addEventListener("input", function () { return _this.computeData(); });
        }
        console.log(this.inputArray);
        this.addButton.addEventListener("click", function () { return _this.addInputs(); });
    };
    App.prototype.getInputs = function () {
        this.sumInput = document.querySelector("#sum");
        this.avgInput = document.querySelector("#avg");
        this.minInput = document.querySelector("#min");
        this.maxInput = document.querySelector("#max");
    };
    App.prototype.watchInputValues = function () {
        var _this = this;
        this.inputArray.forEach(function (input) {
            console.log(input);
            input.addEventListener("input", function () { return _this.computeData(); });
        });
    };
    App.prototype.computeData = function (sum) {
        if (sum === void 0) { sum = 0; }
        this.inputArray.forEach(function (input) { return (sum += +input.value); });
        var inputValues = this.inputArray
            .filter(function (el) { return el.value && !isNaN(Number(el.value)); })
            .map(function (el) { return Number(el.value); });
        var avg = sum / inputValues.length;
        var min = Math.min.apply(Math, inputValues);
        var max = Math.max.apply(Math, inputValues);
        this.showData(sum, avg, min, max);
    };
    App.prototype.showData = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return App;
}());
var ComputeApp = new App();

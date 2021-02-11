class ProgressBar {
    constructor(selector, data) {
       this.selector = selector;
       this.data = data;
    }


    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
        console.error('ERROR: netinkamo formato selectorius.');
        return false;        }
    }
         return true;
    }
}

export { ProgressBar }
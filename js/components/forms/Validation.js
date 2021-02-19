class Validation {

   static isValidName(name) {
       // ne tuscias tekstas
       if (!Validation.isNonEmptyText(name)) {
           return 'Vardas turi buti ne tuscias.';
       }
 
       // nei prekyje, nei gale nera tarpu
       if (!Validation.noSpacesAround(name)) {
           return 'Vardo prekyje ir gale negali buti tarpu.';
       }

       // pirma raide didzioji
       if (!Validation.isFirstLetterUppercase(name)) {
           return 'Vardo pirmoji raide turi buti didzioji';
       }

       // visos likusios - tik mazosios
       if (!Validation.isLowercaseButFirst(name)) {
           return 'Vardo visos raides, isskyrus pirma, turi buti mazosios.';
       }

       // negali buti daugiau nei vienas zodis 
       //(nera tarpu..., nes jeigu yra tarpas tai jau nebe vienas zodis)
       if (!Validation.isSingleWord(name)) {
           return 'Vardas turi buti vienas zodis.';
       } 

       // tik abeceles raides (galimybe nuroditi kokios abeceles yra priimtinos)
       return true;
   }
   static isValidEmail(email) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(email)) {
            return 'El.pastas turi buti ne tuscias.';
        }

        // nei prekyje, nei gale nera tarpu
        if (!Validation.noSpacesAround(email)) {
        return 'El.pasto prekyje ir gale negali buti tarpu.';
        }

        // butinas ir tik vienas @ simbolis
        if (!Validation,this.textContainsLetter(email, '@')) {
            return 'El. pastas turi tureti viena @ simboli.';
        }

        // pries @ (lokali dalis) turi buti - ne tuscias tekstas
        // uz @ (domenu dalis) turi buti - ne tuscias tekstas
       return true;
   }
   static isValidText(text) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(text)) {
            return 'Tekstas turi buti ne tuscias.';
        }
       return true;
   }
   static isNonEmptyText(text) {
       if (typeof text !== 'string' ||
          text === '') {
          return false;
        }
        return true;
    }
    static isSingleWord(text) {
        return !text.includes(' ');
    }
    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAround(text) {
        return text === text.trim();
    }

    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static textContainsLetter(text, leter, count = 1) {
        let letterCount = 0;
         for (let symbol of text) {
             if (symbol === letter) {
                 letterCount++;
             }
         }

        // letterCount = text.split('').filter(symbol => symbol === letter).length;

        return letterCount === count;
    }
}

export { Validation }



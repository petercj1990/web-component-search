(function() {
    "use strict";

    const template = `
        <form>
            search: <input type="text" id="searchval" name="searchval"><br>
            </input>
            <input type="submit"></input>
        </form>
        //<!--  <input type="submit" formaction="javascript:console.log(searchval.value)"></input> -->
    `;
    class SearchBar extends HTMLElement {
        get pressed() {
            //console.log(searchval)
            return this.getAttribute('pressed');
        }

        set pressed(value) {
            if (value) {
                this.setAttribute('pressed', 'pressed');
            } else {
                this.removeAttribute('pressed');
            }
        }
        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;

            this.addEventListener('click', function() {
                this.toggle();
            });
        }
        toggle() {
            this.pressed = !this.pressed;
        }
    }
    window.customElements.define('search-bar', SearchBar);
})();
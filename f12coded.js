     //////////F12 disable code gotechn.com////////////////////////

        document.onkeypress = function (event) {

            event = (event || window.event);

            if (event.keyCode == 123) {

               //alert('No F-12');

                return false;

            }

        }

        document.onmousedown = function (event) {

            event = (event || window.event);

            if (event.keyCode == 123) {

                //alert('No F-keys');

                return false;

            }

        }

    document.onkeydown = function (event) {

            event = (event || window.event);

            if (event.keyCode == 123) {

                //alert('No F-keys');

                return false;

            }

        }

    /////////////////////end///////////////////////

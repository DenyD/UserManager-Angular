let app = angular.module('app', []);

app.controller('MainCtrl', MainCtrl);

function MainCtrl() {
    let vm = this;
    vm.title = "Zarzadzanie uzytkownikami";

    vm.users = [
        {
            name: "Monika",
            lastName: "Nowacka",
            mail: "emka@wp.pl", 
            login: "mnowacka", 
            haslo: "monikan", 
            rola: "Dyrektor", 
            status: "http://s2.ifotos.pl/img/greenpng_aarenes.png"

        },
        {
            name: "Daniel",
            lastName: "Siwczak",
            mail: "dsiwczak@wp.pl", 
            login: "dsiwczak", 
            haslo: "daniels", 
            rola: "Developer", 
            status: "http://s2.ifotos.pl/img/greenpng_aarenes.png"

        },
        {
            name: "Tomek",
            lastName: "Kowal",
            mail: "tomcio@wp.pl", 
            login: "tkowal", 
            haslo: "tomekk", 
            rola: "Service IT", 
            status: "http://s2.ifotos.pl/img/redpng_aarensn.png"

        },
        {
            name: "Beata",
            lastName: "Mila",
            mail: "betka@wp.pl", 
            login: "bmila", 
            haslo: "beatam", 
            rola: "Sekretarka", 
            status: "http://s2.ifotos.pl/img/greenpng_aarenes.png"

        }
    ]

    vm.addUser = () => {
        vm.users.push(vm.user);
        vm.user = {};
    }

    vm.deleteUser = (index) => {
        vm.users.splice(index, 1);
    }
    
    vm.editUser = (user) => {
        vm.user = user
    }
    vm.saveUser = () => {
        vm.user = {};
    }

    vm.liczbaUserow = vm.users.length;
}
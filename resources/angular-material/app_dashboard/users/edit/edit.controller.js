/**
 * edit.controller.js
 * Created by anonymous on 16/12/15 14:30.
 */

(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('UsersEditController', UsersEditController);

    UsersEditController.$inject = ['$stateParams'];

    /* @ngInject */
    function UsersEditController($stateParams) {

        var vm = this;

        vm.data = {id: $stateParams.id};


        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();


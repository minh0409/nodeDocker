/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Mike';
    this.helloText = 'Welcome , Mike';
    this.descriptionText = '';

};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
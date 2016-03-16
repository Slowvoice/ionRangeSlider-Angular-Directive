/**
 * Created by Abdullah on 9/19/14.
 *
 * Modified and enhanced by Juergen Wahlmann on 3/5/15
 */

var app = angular.module('ionSlider',[]);

app.directive('ionslider', ['$timeout', function($timeout){
    return {
        require:'?ngModel',
        restrict:'E',
        scope:{min:'=',
            max:'=',
            type:'@',
            prefix:'@',
            maxPostfix:'@',
            prettify:'@',
            grid:'@',
            gridMargin:'@',
            postfix:'@',
            step:'@',
            hideMinMax:'@',
            hideFromTo:'@',
            disable:'=',
            onChange:'=',
            onFinish:'='

        },
        template:'<div></div>',
        replace:true,
        link:function($scope,$element,attrs,ngModel){
            (function init(){
                $element.ionRangeSlider({
                    min: $scope.min,
                    max: $scope.max,
                    type: $scope.type,
                    prefix: $scope.prefix,
                    maxPostfix: $scope.maxPostfix,
                    prettify: $scope.prettify,
                    grid: $scope.grid,
                    gridMargin: $scope.gridMargin,
                    postfix:$scope.postfix,
                    step:$scope.step,
                    hideMinMax:$scope.hideMinMax,
                    hideFromTo:$scope.hideFromTo,
                    disable:$scope.disable,
                    onChange:$scope.onChange,
                    onFinish:$scope.onFinish
                });
            })();
            ngModel.$render = function() {
                $timeout(function(){ $element.data("ionRangeSlider").update({from: ngModel.$viewValue}); });
            };
            $element.on('change', function() {
                $timeout(function(){ ngModel.$setViewValue($element.data('from')) });
            });
            $scope.$watch('min', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({min: value}); });
            },true);
            $scope.$watch('max', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({max: value}); });
            });
            $scope.$watch('disable', function(value) {
                $timeout(function(){ $element.data("ionRangeSlider").update({disable: value}); });
            });
        }
    }
}]);

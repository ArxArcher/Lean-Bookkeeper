function Ctrl($scope){
	$scope.newExpense = '';
	$scope.expenses = [];
	
	$scope.isEditing = true;
	
	$scope.addExpense = function(){
		if(this.newExpenseType && this.newItem && this.newExpense){
			
			this.expenses.push({type:this.newExpenseType, item:this.newItem, amount:this.newExpense, isEditing:false});
			this.newExpenseType = '';
			this.newItem = '';
			this.newExpense = '';
		}		
	}
	
	$scope.summary = function(){
		var sum = 0;
		
		for(var i=0; i < $scope.expenses.length; i++){
			sum += $scope.expenses[i].amount;			
		}
		return sum;
	}
	
	
	
	$scope.foodPercentage = function(){		
		var sumTotal = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			sumTotal += $scope.expenses[i].amount;			
		}		
		var sumPart = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			if($scope.expenses[i].type === '食') sumPart += $scope.expenses[i].amount;
		}		
		if(sumTotal === 0) {return 0;}
		else {return sumPart/sumTotal*100;}		
	}
	
	$scope.clothingPercentage = function(){		
		var sumTotal = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			sumTotal += $scope.expenses[i].amount;			
		}		
		var sumPart = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			if($scope.expenses[i].type === '衣') sumPart += $scope.expenses[i].amount;
		}		
		if(sumTotal === 0) {return 0;}
		else {return sumPart/sumTotal*100;}		
	}
	
	$scope.housingPercentage = function(){		
		var sumTotal = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			sumTotal += $scope.expenses[i].amount;			
		}		
		var sumPart = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			if($scope.expenses[i].type === '住') sumPart += $scope.expenses[i].amount;
		}		
		if(sumTotal === 0) {return 0;}
		else {return sumPart/sumTotal*100;}		
	}

	$scope.transportPercentage = function(){		
		var sumTotal = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			sumTotal += $scope.expenses[i].amount;			
		}		
		var sumPart = 0;		
		for(var i=0; i < $scope.expenses.length; i++){
			if($scope.expenses[i].type === '行') sumPart += $scope.expenses[i].amount;
		}		
		if(sumTotal === 0) {return 0;}
		else {return sumPart/sumTotal*100;}		
	}
	
	
	$scope.edit = function(expense){
		expense.isEditing=true;
	}
	
	$scope.save = function(expense){
		expense.isEditing=false;
	}
	
	$scope.del = function(expense){
		$scope.expenses.splice($scope.expenses.indexOf(expense),1);
	}
}
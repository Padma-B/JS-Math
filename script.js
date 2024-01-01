class math	{
	// powers
	static pow(num, exp = 2)	{
		return num ** exp;
	}
	// armstrong number
	static isArmstrong(num)	{
		let sum = 0;
		let originalNum = num;
		while(num > 0)	{
			let number = num % 10;
			sum += number ** 3;
			num = Math.floor(num / 10);
		}
		return sum == originalNum;
	}
	// evenOrOdd
	static evenOrOdd(num)	{
		return num % 2 == 0 ? "Even" : "Odd";
	}
	// isEven or isOdd
	static isEven(num)	{
		return num % 2 == 0;
	}
	static isOdd(num)	{
		return num % 2 == 1;
	}
	// factorial
	static fact(num)	{
		if(num >= 0)	{
			if(num === 0 || num === 1)	{
				return 1;
			}
			else	{
				let result = 1;
				for(let i = 2; i <= num; i++)	{
					result *= i;
				}
				return result;
			}
		}
	}
	// swap two number
	static swap(num1, num2)	{
		return [num1, num2] = [num2, num1];
	}
	// // quadratic
	// static quadratic(a, b, c)	{
	// 	let root1, root2;
	// 	// calculate discriminant
	// 	let discriminant = b * b - 4 * a * c;
	// 	// condition for real and different
	// 	if(discriminant > 0)	{
	// 		root1 = -b + Math.sqrt(discriminant) / 2 * a;
	// 		root1 = -b - Math.sqrt(discriminant) / 2 * a;
	// 	}
	// 	// condition for real and equal roots
	// 	else if(discriminant == 0)	{
	// 		root1 = root2 = -b / (2 * a);
	// 	}
	// 	// roots are not real
	// 	else if(discriminant < 0)	{
	// 		root1 = -b / 2 * a
	// 	}
	// }
	static isPositiveOrNegative(num)	{
		return num == 0 ? "Zero" : num > 0 ? "Positive" : "Negative";
	}
	// fibo
	static fibo(num, num1 = 0, num2 = 1)	{
		let nextTerm = 0, result = [];
		for(let i =1; i <= num; i++)	{
			result.push(num1);
			nextTerm = num1 + num2;
			num1 = num2;
			num2 = nextTerm;
		}
		return result;
	}
	// Multiplication Table
	static table(tableNum, limit = 10)	{
		let result = [];
		for(let i = 1; i <= limit; i++)	{
			let multiply = `${i} x ${tableNum} = ${i * tableNum}`;
			result.push(multiply);
		}
		return result.join("\n");
	}
	static sumOfNaturalNum(num)	{
		let sum = 0;
		if(num > 0)	{
			for(let i = 1; i <= num; i++)	{
				sum += i;
			}
		}
		return sum;
	}
	// reverse number
	static reverse(num)	{
		let reverseNum = 0;
		while(num > 0)	{
			let digit = num % 10;
			reverseNum = reverseNum * 10 + digit;
			num = Math.floor(num / 10);
		}
		return reverseNum;
	}
	// factors
	static factors(num)	{
		let result = [];
		for(let i = 0; i <= num; i++)	{
			if(num % i == 0)	{
				result.push(i);
			}
		}
		return result;
	}
	// no of factors
	static numberOfFactors(num)	{
		return math.factors(num).length;
	}
	// sum of arr
	static sum(arr)	{
		let sum = 0;
		for(let i = 0; i < arr.length; i++)	{
			sum += arr[i];
		}
		return sum;
	}
	// maximum
	static max(arr)	{
		if(arr.length == 0)	{
			return undefined;
		}
		let largeNum = 0;
		for(let i = 0; i < arr.length; i++)	{
			if(arr[i] > largeNum)	{
				largeNum = arr[i];
			}
		}
		return largeNum;
	}
	// minimum
	static min(arr)	{
		if(arr.length == 0)	{
			return undefined;
		}
		let minNum = arr[0];
		for(let i = 0; i < arr.length; i++)	{
			if(arr[i] < minNum)	{
				minNum = arr[i];
			}
		}
		return minNum;
	}
	// // find lcm
	// static lcm(arr)	{
	// 	if(arr.length < 2)	{
	// 		throw new Error("At least two numbers are required.");
	// 	}
	// 	let result = arr[0];
	// 	for(let i = 0; i < arr.length; i++)	{
	// 		result = math.findLcm(result, arr[i]);
	// 	}
	// 	return result;
	// }
	// static findLcm(a, b)	{
	// 	return (a * b)
	// }

	// Palindrom
	static palindrome(num)	{
		return num == math.reverse(num);
	}
}
// test cases
console.log("Pow", math.pow(2));
console.log("Pow", math.pow(2,4));
console.log("Armstrong", math.isArmstrong(153));
console.log("Armstrong", math.isArmstrong(1534));
console.log("Even or odd", math.evenOrOdd(2));
console.log("Even or odd", math.evenOrOdd(3));
console.log("isEven", math.isEven(3));
console.log("isEven", math.isEven(4));
console.log("isOdd", math.isOdd(3));
console.log("isOdd", math.isOdd(70));
console.log("Factorial", math.fact(5));
console.log("Swap", math.swap(2,3));
console.log("Positive/Negative", math.isPositiveOrNegative(2));
console.log("Positive/Negative", math.isPositiveOrNegative(0));
console.log("Positive/Negative", math.isPositiveOrNegative(-2));
console.log("Fibo", math.fibo(2));
console.log("Fibo", math.fibo(5,1,2));
console.log(math.table(5));
console.log(math.table(5, 5));
console.log("Sum of naturatal numbers", math.sumOfNaturalNum(3));
console.log("Reverse", math.reverse(153));
console.log("Factors ", math.factors(12));
console.log("No of Factors", math.numberOfFactors(12));
console.log("Sum of an array", math.sum([1,2,3]));
console.log("Max", math.max([1,2,3]));
console.log("Min", math.min([1,2,3]));
console.log("Palindrome", math.palindrome(23));
console.log("Palindrome", math.palindrome(234));
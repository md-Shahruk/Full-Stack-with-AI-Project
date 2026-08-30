const nums = [10, 5, 2, 30];
nums.sort();
console.log(nums);//[ 10, 2, 30, 5 ] becasue of string comparison

nums.sort((a,b)  => a - b);
console.log(nums);


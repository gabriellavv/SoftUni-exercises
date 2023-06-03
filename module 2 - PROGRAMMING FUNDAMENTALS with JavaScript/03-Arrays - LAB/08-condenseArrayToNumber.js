function condenseArrayToNumber(nums) {

    let condensed = [];

    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];

        }
        nums = condensed;
        condensed = [];
    }
    console.log(nums[0])
}

condenseArrayToNumber([2, 10, 3]);
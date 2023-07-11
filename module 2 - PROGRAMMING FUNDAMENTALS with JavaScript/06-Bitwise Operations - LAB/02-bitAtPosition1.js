function bitAtPosition1(input) {
                                    //  13 = 1101
    let mask = 1 << 1;              // mask: 0010
    let bit = input & mask;         //        &
    let result = bit >> 1;          //       000(X)  - изпада последната нула и резултата е предпоследната 0

    console.log(result);
}

bitAtPosition1(13);
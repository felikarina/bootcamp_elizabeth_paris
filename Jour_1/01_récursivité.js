/* A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs. */

function count(number_step){
    if(number_step < 0){
        return 0
    }
    if(number_step == 0){
        return 1
    }
    else{
        return count(number_step-1) + count(number_step-2) + count(number_step-3)
    }
}

console.log(count(4))
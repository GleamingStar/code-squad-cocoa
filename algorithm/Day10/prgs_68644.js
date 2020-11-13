//이미 풀었던 문제

function solution(numbers) {
    
	const answer =[]
	for (let i=0; i<numbers.length; i++) {
		for (let j=i+1; j<numbers.length; j++) {
			if (!answer.includes(numbers[i]+numbers[j]))
			answer.push(numbers[i]+numbers[j]);
		}
	}
	answer.sort((a,b)=>a-b)
	
	return answer;

}

/* 예전에 이렇게 품
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] solution(int[] numbers) {
        ArrayList<Integer> answer1 = new ArrayList<>();
		
		for (int i=0; i<numbers.length; i++) {
			for (int j=i+1; j<numbers.length; j++) {
				if (!answer1.contains(numbers[i]+numbers[j]))
				answer1.add(numbers[i]+numbers[j]);
			}
		}

		Collections.sort(answer1);
		
		int[] answer = new int[answer1.size()];
	    for (int i=0; i < answer.length; i++) {
	        answer[i] = answer1.get(i).intValue();
	    }
		
        return answer;
    }
}
*/
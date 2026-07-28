class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let fleets = 1;
        const positionTime = position
            .map((ele, i) => {
                return { pos: ele, time: (target - ele) / speed[i] };
            })
            .sort((a, b) => b.pos - a.pos);

        let slowestTime = positionTime[0].time;

        for (let i = 1; i < positionTime.length; i++) {
            if (positionTime[i].time > slowestTime) {
                fleets++;
                slowestTime = positionTime[i].time;
            }
        }

        return fleets;
    }
}

function avoidFlood(rains: number[]): number[] {
    // Each lake's last fill day
    const fullLake = new Map<number, number>();
    // Sorted dry days (min-heap)
    const dryDays: number[] = [];
    // Result array
    const res = Array(rains.length).fill(1);

    // For each day in rains
    for (let i = 0; i < rains.length; i++) {
        const lake = rains[i];
        if (lake > 0) {
            res[i] = -1; // Mark raining days as -1

            if (fullLake.has(lake)) {
                // This lake is full. Find the earliest dry day after last rain.
                let found = false;
                for (let j = 0; j < dryDays.length; j++) {
                    if (dryDays[j] > fullLake.get(lake)!) {
                        // Dry this lake on day dryDays[j]
                        res[dryDays[j]] = lake;
                        dryDays.splice(j, 1); // Remove selected dry day
                        found = true;
                        break;
                    }
                }
                if (!found) return [];
            }

            // Update latest rain day for lake
            fullLake.set(lake, i);
        } else {
            dryDays.push(i);
        }
    }
    // Any extra dry days will default to 1 (or any lake)
    for (let i = 0; i < rains.length; i++)
        if (rains[i] === 0 && res[i] === 1) res[i] = 1;

    return res;
}

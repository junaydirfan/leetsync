function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    // Sort the potions array for binary search usage
    potions.sort((a, b) => a - b);

    function countSuccessful(spell: number): number {
        // Binary search for the first potion such that spell * potion >= success
        let left = 0, right = potions.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // Avoid overflow by casting to BigInt if needed
            if (BigInt(spell) * BigInt(potions[mid]) >= BigInt(success)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // All potions from 'left' to end are valid
        return potions.length - left;
    }

    return spells.map(countSuccessful);
}

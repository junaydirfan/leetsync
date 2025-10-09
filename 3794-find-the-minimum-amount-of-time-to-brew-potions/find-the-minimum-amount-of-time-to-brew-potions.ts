function minTime(skill: number[], mana: number[]): number {
    const n = skill.length;
    const m = mana.length;
    const sumSkill = skill.reduce((a, b) => a + b, 0);

    let prevWizardDone = sumSkill * mana[0];

    for (let j = 1; j < m; ++j) {
        let prevPotionDone = prevWizardDone;
        for (let i = n - 2; i >= 0; --i) {
            // Go backwards: wizard i for potion j
            prevPotionDone -= skill[i + 1] * mana[j - 1];
            prevWizardDone = Math.max(
                prevPotionDone,
                prevWizardDone - skill[i] * mana[j]
            );
        }
        prevWizardDone += sumSkill * mana[j];
    }
    return prevWizardDone;
}

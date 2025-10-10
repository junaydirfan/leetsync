function maximumEnergy(energy: number[], k: number): number {
  const n = energy.length;
  const dp = Array(n).fill(0);

  for(let i = n-1; i >= n-k; i--) {
    dp[i] = energy[i];
  }

  for(let i = n-k-1; i >= 0; i--) {
    dp[i] = energy[i] + dp[i+k];
  }

  return Math.max(...dp);
}

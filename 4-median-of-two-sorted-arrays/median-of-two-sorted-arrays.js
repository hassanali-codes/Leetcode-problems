/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
        // Initialize merged array
        let merged = [];
        let i = 0, j = 0;

        // Merge both arrays
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                merged.push(nums1[i]);
                i++;
            } else {
                merged.push(nums2[j]);
                j++;
            }
        }

        // Add remaining elements
        while (i < nums1.length) merged.push(nums1[i++]);
        while (j < nums2.length) merged.push(nums2[j++]);

        // Find median
        const n = merged.length;
        if (n % 2 === 1)
            return merged[Math.floor(n / 2)];
        else
            return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    }


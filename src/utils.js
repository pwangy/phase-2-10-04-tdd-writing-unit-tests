export const pointsForWord = (word) => {
    let points = 0
    for (const char of word) {
        points += /[aeiou]/i.test(char) ? 1 : 2
    }
    return points
}

// Understand the feature we're building
// Translate the feature into a test specification
// Write and implement code that passes the test
// Clean up and refactor
// Repeat!
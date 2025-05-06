/**
 * Filter utilities for recipe search functionality
 */

/**
 * Determines if a string contains a word that starts with the query
 * @param {string} text - The text to search in
 * @param {string} query - The search term to look for
 * @returns {boolean} - Whether the text contains a matching word
 */
const hasWordMatch = (text, query) => {
  if (!text || !query) return false;
  
  // Convert to lowercase for case-insensitive comparison
  text = text.toLowerCase();
  query = query.toLowerCase();
  
  // Check if the exact tag/name is the query
  if (text === query) return true;
  
  // Split the text into words
  const words = text.split(/\s+/);
  
  // Check if any word starts with the query
  for (const word of words) {
    if (word.startsWith(query)) {
      return true;
    }
  }

  return false;
};

/**
 * Finds recipes with tags that match the search query
 * @param {string} query - The search term to look for
 * @param {Array} allRecipes - All available recipes
 * @returns {Array} - Filtered recipes that match the query in their tags
 */
export const findTags = (query, allRecipes) => {
  if (!query) return [];
  
  return allRecipes.filter(recipe => {
    return recipe.tags.some(tag => hasWordMatch(tag, query));
  });
};

/**
 * Finds recipes with names that match the search query
 * @param {string} query - The search term to look for
 * @param {Array} allRecipes - All available recipes
 * @returns {Array} - Filtered recipes that match the query in their names
 */
export const findNames = (query, allRecipes) => {
  if (!query) return [];
  
  return allRecipes.filter(recipe => {
    return hasWordMatch(recipe.name, query);
  });
};

/**
 * Filters recipes using AND logic (all search terms must match)
 * @param {string} filterString - The full search string
 * @param {Array} allRecipes - All available recipes
 * @returns {Array} - Filtered recipes
 */
export const filterRecipesAnd = (filterString, allRecipes) => {
  filterString = filterString.toLowerCase();
  
  if (filterString === '') {
    return allRecipes;
  }
  
  let filterStringWords = filterString.split(' ');
  let recipeSets = [];
  
  // Process each search term separately
  filterStringWords.forEach(query => {
    // Create a new set of matching recipes for this query term
    const matchingRecipes = [
      ...findTags(query, allRecipes),
      ...findNames(query, allRecipes)
    ];
    
    // Create a Set to remove duplicates for this query term
    const uniqueMatches = [...new Set(matchingRecipes)];
    
    // Only add non-empty result sets
    if (uniqueMatches.length > 0) {
      recipeSets.push(uniqueMatches);
    }
  });
  
  // If no valid search terms, return empty array
  if (recipeSets.length === 0) {
    return [];
  }
  
  // If only one search term had results, return those results
  if (recipeSets.length === 1) {
    return recipeSets[0];
  }
  
  // Find recipes that match ALL search terms (AND logic)
  return recipeSets.reduce((prevSet, currSet) =>
    prevSet.filter(element => currSet.includes(element))
  );
};

/**
 * Filters recipes using OR logic (any search term can match)
 * @param {string} filterString - The full search string
 * @param {Array} allRecipes - All available recipes
 * @returns {Array} - Filtered recipes
 */
export const filterRecipesOr = (filterString, allRecipes) => {
  filterString = filterString.toLowerCase();
  
  if (filterString === '') {
    return allRecipes;
  }
  
  let filterStringWords = filterString.split(' ');
  let allResults = [];
  
  // Process each search term
  filterStringWords.forEach(query => {
    // Get matches for this query term
    const tagMatches = findTags(query, allRecipes);
    const nameMatches = findNames(query, allRecipes);
    
    // Add all matches to the results array
    allResults = [...allResults, ...tagMatches, ...nameMatches];
  });
  
  // Use a Set to remove duplicates before returning
  return [...new Set(allResults)];
};
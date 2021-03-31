export function computeId(list) {
  return list.map((book, index) => {
    if (book.type !== 3) {
      book.id = index + 1
      if (book.itemList) {
        book.itemList = computeId(book.itemList)
      }
    }
    return book
  })
}

export function gotoBookDetail(vue, book) {
  vue.$router.push({
    path: '/detail',
    query: {
      fileName: book.fileName,
      category: book.categoryText
    }
  })
}

export const categoryList = {
  'ComputerScience': 1,
  'SocialSciences': 2,
  'Economics': 3,
  'Education': 4,
  'Engineering': 5,
  'Environment': 6,
  'Geography': 7,
  'History': 8,
  'Laws': 9,
  'LifeSciences': 10,
  'Literature': 11,
  'Biomedicine': 12,
  'BusinessandManagement': 13,
  'EarthSciences': 14,
  'MaterialsScience': 15,
  'Mathematics': 16,
  'MedicineAndPublicHealth': 17,
  'Philosophy': 18,
  'Physics': 19,
  'PoliticalScienceAndInternationalRelations': 20,
  'Psychology': 21,
  'Statistics': 22
}

export function categoryText(category, vue) {
  switch (category) {
    case 1:
      return vue.$t('category.computerScience')
    case 2:
      return vue.$t('category.socialSciences')
    case 3:
      return vue.$t('category.economics')
    case 4:
      return vue.$t('category.education')
    case 5:
      return vue.$t('category.engineering')
    case 6:
      return vue.$t('category.environment')
    case 7:
      return vue.$t('category.geography')
    case 8:
      return vue.$t('category.history')
    case 9:
      return vue.$t('category.laws')
    case 10:
      return vue.$t('category.lifeSciences')
    case 11:
      return vue.$t('category.literature')
    case 12:
      return vue.$t('category.biomedicine')
    case 13:
      return vue.$t('category.businessandManagement')
    case 14:
      return vue.$t('category.earthSciences')
    case 15:
      return vue.$t('category.materialsScience')
    case 16:
      return vue.$t('category.mathematics')
    case 17:
      return vue.$t('category.medicineAndPublicHealth')
    case 18:
      return vue.$t('category.philosophy')
    case 19:
      return vue.$t('category.physics')
    case 20:
      return vue.$t('category.politicalScienceAndInternationalRelations')
    case 21:
      return vue.$t('category.psychology')
    case 22:
      return vue.$t('category.statistics')
  }
}

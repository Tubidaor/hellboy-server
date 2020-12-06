const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      first_name: 'juan',
      last_name: 'baltazar',
      email: 'juan.baltazar1@gmail.com',
      password: 'faith',
      date_created: '07/07/2020'
    },
    {
      id: 2,
      user_id: '13c0713a-ec31-4378-8aad-37a4c9f4a304',
      first_name: 'megan',
      last_name: 'baltazar',
      email: 'meganlaurel17@gmail.com',
      password: 'faith',
      date_created: '07/07/2020'
    }
  ]
}

function makeTextEntries() {
  return [
    {
      id: 1,
      entry_id: '2e537fee-1e43-4357-890c-e96c477ba905',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      date_created: '07/12/2020',
    }, 
    {
      id: 2,
      entry_id: '812ceba5-81d7-49d6-855a-9c2a7db81832',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      date_created: '07/10/2020',
    },
    {
      id: 3,
      entry_id: 'b20a0fa9-1a44-4d99-86fd-dbd8516ecabf',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      date_created: '07/09/2020',
    },
    
  ]
}

function makeShippingAddress() {
  return [
    {
      id: 1,
      address_id: 'e773a595-5990-4678-a63c-9ea11f3df831',
      address_line1: '26810 Alcott Ct',
      address_line2: 'apt 4',
      city: 'Stevenson Ranch',
      state: 'CA',
      zip: 91381,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    }
  ]
}

function makeUserQuestions() {
  return [
    {
      id: 1,
      question_id: 'e773a595-5990-4678-a63c-9ea11f3df831',
      question: "How do you feel mentally, today?",
      category: "Personal",
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    },
    {
      id: 2,
      question_id: '4b565474-112b-462a-abbc-17cceaf34e9c',
      question: "How do you feel emotionally, today?",
      category: "Personal",
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    },
    {
      id: 3,
      question_id: '6918450a-acca-478b-a890-0659ac50c839',
      question: "How do you feel physically, today?",
      category: "Personal",
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    },
    {
      id: 4,
      question_id: '502bda60-984e-42b0-8673-8f35c838eaff',
      question: `How do you feel about your relationship with partner?`,
      category: 'Overall',
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    },
    {
      id: 5,
      question_id: 'f7464740-6c7b-4654-a190-4f6f30395ba8',
      question: `How do you feel about your sex life with partner?`,
      category: 'Sex',
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
    },
    {
      id: 6,
      question_id: '04684f9d-d0d6-4f81-9d7b-336938edba51',
      question: `How do you feel about your emotional connection with partner?`,
      category: 'Friendship',
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b'
      
    }

  ]
}

function makeFileUploads() {
  return [
    {
      "id" : 1,
      "entry_id" : "cbb7d0cd-3187-49b2-87b0-51898a6521bb",
      "file_name" : "cbb7d0cd-3187-49b2-87b0-51898a6521bb-a6qxon08a6m8dvgpkm1j_normal.jpeg",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/cbb7d0cd-3187-49b2-87b0-51898a6521bb-a6qxon08a6m8dvgpkm1j_normal.jpeg",
      "file_type" : "image\/jpeg",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T04:40:29Z"
    },
    {
      "id" : 2,
      "entry_id" : "4d35a449-0ba8-4e89-b841-5fdee5012c9d",
      "file_name" : "4d35a449-0ba8-4e89-b841-5fdee5012c9d-acWNy7VC_normal.jpeg",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/4d35a449-0ba8-4e89-b841-5fdee5012c9d-acWNy7VC_normal.jpeg",
      "file_type" : "image\/jpeg",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T04:40:29Z"
    },
    {
      "id" : 3,
      "entry_id" : "56ec49b8-7dea-4133-af5d-5d9ee8e7ce44",
      "file_name" : "56ec49b8-7dea-4133-af5d-5d9ee8e7ce44-1f44f.png",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/56ec49b8-7dea-4133-af5d-5d9ee8e7ce44-1f44f.png",
      "file_type" : "image\/png",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T04:40:58Z"
    },
    {
      "id" : 4,
      "entry_id" : "b1cb593a-2edc-47d3-9dd0-bb259203d45a",
      "file_name" : "b1cb593a-2edc-47d3-9dd0-bb259203d45a-ByJ3NcjCEAINEoP.png",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/b1cb593a-2edc-47d3-9dd0-bb259203d45a-ByJ3NcjCEAINEoP.png",
      "file_type" : "image\/png",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T04:40:58Z"
    },
    {
      "id" : 5,
      "entry_id" : "988af6d4-0665-4601-8b1d-3b7ae725ae02",
      "file_name" : "988af6d4-0665-4601-8b1d-3b7ae725ae02-ByJg8ZICYAAoT86.png",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/988af6d4-0665-4601-8b1d-3b7ae725ae02-ByJg8ZICYAAoT86.png",
      "file_type" : "image\/png",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T04:40:58Z"
    },
    {
      "id" : 6,
      "entry_id" : "19031af3-349b-4c77-ba4d-e52b3345b90e",
      "file_name" : "19031af3-349b-4c77-ba4d-e52b3345b90e-Cowboys Vs Titans 3rd Down Defense :Week 2 2014.mp4",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/19031af3-349b-4c77-ba4d-e52b3345b90e-Cowboys Vs Titans 3rd Down Defense :Week 2 2014.mp4",
      "file_type" : "video\/mp4",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T05:46:43Z"
    },
    {
      "id" : 7,
      "entry_id" : "009e10fd-a3dd-4b61-be55-b43d8476cd9c",
      "file_name" : "009e10fd-a3dd-4b61-be55-b43d8476cd9c-audioTest.m4a",
      "file_path" : "uploads\/73b8bb71-c339-4029-bc70-6204928aa77b\/009e10fd-a3dd-4b61-be55-b43d8476cd9c-audioTest.m4a",
      "file_type" : "audio\/mp4",
      "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
      "date_created" : "2020-07-22T07:52:39Z"
    }
      
  ]

}

function makeTestRelationships() {
  return [
    {
      id: 1,
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      user_first_name: 'juan',
      user_last_name: 'baltazar',
      user_email: 'juan.baltazar1@gmail.com',
      partner_id: '13c0713a-ec31-4378-8aad-37a4c9f4a304',
      partner_first_name: 'megan',
      partner_last_name: 'baltazar',
      partner_email: 'meganlaurel17@gmail.com',
      anniversary: '2012-05-04T14:00:00.000Z'
    }
  ]
}

function makeUserRelationship() {
  return [
    {
      id: '1',
      relationship_id: 'f94cb634-474b-440a-8390-d58e784bde0e',
      user_id: '73b8bb71-c339-4029-bc70-6204928aa77b',
      partner_id: '13c0713a-ec31-4378-8aad-37a4c9f4a304',
      anniversary: '5/04/2012',
      date_created: '8/21/2020'
    }
  ]
}

function makeQuestionAnswers() {
  return [
        {
          "id" : 1,
          "entry_id" : "0aa57a14-1e1a-44f8-aa2f-92f11d641d83",
          "user_id" : "73b8bb71-c339-4029-bc70-6204928aa77b",
          "question_id" : "e773a595-5990-4678-a63c-9ea11f3df831",
          "joy" : 100,
          "disgust" : 0,
          "sadness" : 0,
          "anger" : 0,
          "fear" : 0,
          "mood" : 100,
          "date_created" : "2020-07-31T05:00:56Z"
        },
  ]
}

function retrieveData() {
  const testUsers = makeUsersArray()
  const textEntries = makeTextEntries()
  const shippingAddress = makeShippingAddress()
  const userQuestions = makeUserQuestions()
  const fileUploads = makeFileUploads()
  const testRelationships = makeTestRelationships()
  const testAnswers = makeQuestionAnswers()
  const userRelationship = makeUserRelationship ()

  return {
    testUsers,
    textEntries,
    shippingAddress,
    userQuestions,
    fileUploads,
    testRelationships,
    testAnswers,
    userRelationship
  }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        hb_shipping_address,
        hb_users cascade
      `
    )
    .then(() =>
      Promise.all([
        // trx.raw(`ALTER SEQUENCE tqm_questionaire_id_seq minvalue 0 START WITH 1`),
        // trx.raw(`ALTER SEQUENCE tqm_gen_questions_id_seq minvalue 0 START WITH 1`),
        // trx.raw(`ALTER SEQUENCE tqm_relationship_request_id_seq minvalue 0 START WITH 1`),
        // trx.raw(`ALTER SEQUENCE tqm_user_relationship_id_seq minvalue 0 START WITH 1`),
        // trx.raw(`ALTER SEQUENCE tqm_file_uploads_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hb_shipping_address_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE hb_users_id_seq minvalue 0 START WITH 1`),
        // trx.raw(`SELECT setval('tqm_questionaire_id_seq', 0)`),
        // trx.raw(`SELECT setval('tqm_gen_questions_id_seq', 0)`),
        // trx.raw(`SELECT setval('tqm_relationship_request_id_seq', 0)`),
        // trx.raw(`SELECT setval('tqm_user_relationship_id_seq', 0)`),
        // trx.raw(`SELECT setval('tqm_file_uploads_id_seq', 0)`),
        trx.raw(`SELECT setval('hb_shipping_address_id_seq', 0)`),
        trx.raw(`SELECT setval('hb_users_id_seq', 0)`),
      ])
    )
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  
  return db.into('hb_users').insert(preppedUsers)
    .then(() =>
    db.raw(
      `SELECT setval('hb_users_id_seq', ?)`,
      [users[users.length-1].id],
    )
  )
}

function seedAddress(db, table, address) {
  return db
    .into(table)
    .insert(address)
    .then(() =>
      db.raw(`SELECT setval('hb_shipping_address_id_seq, ?)`,
      [shippingEntries[shippingEntries.length -1].id],
      )
    )
}

function seedTextTables(db, textEntries) {
  return db
    .into('tqm_text_entries')
    .insert(textEntries)
    .then(() => 
      db.raw(
        `SELECT setval('tqm_text_entries_id_seq', ?)`,
        [textEntries[textEntries.length -1].id],
      )
    )

}

// function seedGenQuestions(db, genQuestions) {
//   return db
//     .into('tqm_gen_questions')
//     .insert(genQuestions)
//     .then(() =>
//       db.raw(
//         `SELECT setval('tqm_gen_questions_id_seq', ?)`,
//         [genQuestions[genQuestions.length -1].id],
//       )
//     )
// }

function seedUserQuestions(db, userQuestions) {
  return db
    .into('tqm_user_questions')
    .insert(userQuestions)
    .then(() =>
      db.raw(
        `SELECT setval('tqm_user_questions_id_seq', ?)`,
        [userQuestions[userQuestions.length -1].id],
      )
    )
}

function seedFileUploads(db, fileUploads) {
  return db
    .into('tqm_file_uploads')
    .insert(fileUploads)
    .then(() => {
      db.raw(
        `SELECT setval('tqm_file_uploads_id_seq', ?)`,
        [fileUploads[fileUploads.length -1].id],
      )
    })
}

function seedRelationshipReq(db, testRelationships) {
  return db
    .into('tqm_relationship_request')
    .insert(testRelationships)
    .then(() => {
      db.raw(
        `SELECT setval('tqm_relationship_request_id_seq', ?)`,
        [testRelationships[testRelationships.length -1].id],
      )
    })
}

function seedUserRelationship(db, relationship) {
  return db
    .into('tqm_user_relationship')
    .insert(relationship)
    .then(() => {
      db.raw(
        `SELECT setval('tqm_user_relationship_id_seq', ?)`,
        [relationship[relationship.length -1].id],
      )
    })
}

function seedQuestionAnswers(db, testAnswers) {
  return db
    .into('tqm_questionaire')
    .insert(testAnswers)
    .then(() => {
      db.raw(
        `SELECT setval('tqm_questionaire_id_seq', ?)`,
        [testAnswers[testAnswers.length -1].id],
      )
    })
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign(
    {user_id: user.user_id},
    secret,
    {subject: user.email,
    algorithm: 'HS256'}
  )

  return `Bearer ${token}`
}

module.exports = {
  retrieveData,
  cleanTables,
  seedUsers,
  seedTextTables,
  makeAuthHeader,
  seedAddress,
  seedUserQuestions,
  seedFileUploads,
  seedRelationshipReq,
  seedQuestionAnswers,
  seedUserRelationship
}
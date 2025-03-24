/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFollowRelationships = /* GraphQL */ `
  mutation CreateFollowRelationships(
    $input: CreateFollowRelationshipsInput!
    $condition: ModelFollowRelationshipsConditionInput
  ) {
    createFollowRelationships(input: $input, condition: $condition) {
      id
      userId
      userName
      followerUserName
      followerUserId
      followeeUserName
      followeeUserId
      accepted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFollowRelationships = /* GraphQL */ `
  mutation UpdateFollowRelationships(
    $input: UpdateFollowRelationshipsInput!
    $condition: ModelFollowRelationshipsConditionInput
  ) {
    updateFollowRelationships(input: $input, condition: $condition) {
      id
      userId
      userName
      followerUserName
      followerUserId
      followeeUserName
      followeeUserId
      accepted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFollowRelationships = /* GraphQL */ `
  mutation DeleteFollowRelationships(
    $input: DeleteFollowRelationshipsInput!
    $condition: ModelFollowRelationshipsConditionInput
  ) {
    deleteFollowRelationships(input: $input, condition: $condition) {
      id
      userId
      userName
      followerUserName
      followerUserId
      followeeUserName
      followeeUserId
      accepted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMyEvents = /* GraphQL */ `
  mutation CreateMyEvents(
    $input: CreateMyEventsInput!
    $condition: ModelMyEventsConditionInput
  ) {
    createMyEvents(input: $input, condition: $condition) {
      id
      userId
      userName
      name
      location
      description
      attendingEvents {
        nextToken
        __typename
      }
      hostingEvents {
        nextToken
        __typename
      }
      attendingDeals {
        nextToken
        __typename
      }
      hostingDeals {
        nextToken
        __typename
      }
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      threads
      facebook
      number
      bigProfilePicture
      smallProfilePicture
      verified
      expoToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMyEvents = /* GraphQL */ `
  mutation UpdateMyEvents(
    $input: UpdateMyEventsInput!
    $condition: ModelMyEventsConditionInput
  ) {
    updateMyEvents(input: $input, condition: $condition) {
      id
      userId
      userName
      name
      location
      description
      attendingEvents {
        nextToken
        __typename
      }
      hostingEvents {
        nextToken
        __typename
      }
      attendingDeals {
        nextToken
        __typename
      }
      hostingDeals {
        nextToken
        __typename
      }
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      threads
      facebook
      number
      bigProfilePicture
      smallProfilePicture
      verified
      expoToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMyEvents = /* GraphQL */ `
  mutation DeleteMyEvents(
    $input: DeleteMyEventsInput!
    $condition: ModelMyEventsConditionInput
  ) {
    deleteMyEvents(input: $input, condition: $condition) {
      id
      userId
      userName
      name
      location
      description
      attendingEvents {
        nextToken
        __typename
      }
      hostingEvents {
        nextToken
        __typename
      }
      attendingDeals {
        nextToken
        __typename
      }
      hostingDeals {
        nextToken
        __typename
      }
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      threads
      facebook
      number
      bigProfilePicture
      smallProfilePicture
      verified
      expoToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAttendingEvents = /* GraphQL */ `
  mutation CreateAttendingEvents(
    $input: CreateAttendingEventsInput!
    $condition: ModelAttendingEventsConditionInput
  ) {
    createAttendingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAttendingEvents = /* GraphQL */ `
  mutation UpdateAttendingEvents(
    $input: UpdateAttendingEventsInput!
    $condition: ModelAttendingEventsConditionInput
  ) {
    updateAttendingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAttendingEvents = /* GraphQL */ `
  mutation DeleteAttendingEvents(
    $input: DeleteAttendingEventsInput!
    $condition: ModelAttendingEventsConditionInput
  ) {
    deleteAttendingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHostingEvents = /* GraphQL */ `
  mutation CreateHostingEvents(
    $input: CreateHostingEventsInput!
    $condition: ModelHostingEventsConditionInput
  ) {
    createHostingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHostingEvents = /* GraphQL */ `
  mutation UpdateHostingEvents(
    $input: UpdateHostingEventsInput!
    $condition: ModelHostingEventsConditionInput
  ) {
    updateHostingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHostingEvents = /* GraphQL */ `
  mutation DeleteHostingEvents(
    $input: DeleteHostingEventsInput!
    $condition: ModelHostingEventsConditionInput
  ) {
    deleteHostingEvents(input: $input, condition: $condition) {
      id
      myUserID
      userName
      eventUserID
      eventID
      eventName
      eventUsername
      eventDate
      eventOrganization
      eventPrivacy
      eventCity
      eventCountry
      eventType
      image
      newImage
      event {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHostingDeals = /* GraphQL */ `
  mutation CreateHostingDeals(
    $input: CreateHostingDealsInput!
    $condition: ModelHostingDealsConditionInput
  ) {
    createHostingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHostingDeals = /* GraphQL */ `
  mutation UpdateHostingDeals(
    $input: UpdateHostingDealsInput!
    $condition: ModelHostingDealsConditionInput
  ) {
    updateHostingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHostingDeals = /* GraphQL */ `
  mutation DeleteHostingDeals(
    $input: DeleteHostingDealsInput!
    $condition: ModelHostingDealsConditionInput
  ) {
    deleteHostingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAttendingDeals = /* GraphQL */ `
  mutation CreateAttendingDeals(
    $input: CreateAttendingDealsInput!
    $condition: ModelAttendingDealsConditionInput
  ) {
    createAttendingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAttendingDeals = /* GraphQL */ `
  mutation UpdateAttendingDeals(
    $input: UpdateAttendingDealsInput!
    $condition: ModelAttendingDealsConditionInput
  ) {
    updateAttendingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAttendingDeals = /* GraphQL */ `
  mutation DeleteAttendingDeals(
    $input: DeleteAttendingDealsInput!
    $condition: ModelAttendingDealsConditionInput
  ) {
    deleteAttendingDeals(input: $input, condition: $condition) {
      id
      myUserID
      userName
      dealUserID
      dealID
      dealName
      dealUsername
      dealDate
      dealEndDate
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      dealOrganization
      dealPrivacy
      dealPremium
      dealCity
      dealCountry
      dealType
      image
      newImage
      deal {
        id
        userId
        userName
        name
        location
        description
        email
        website
        ig
        twitter
        snapchat
        tiktok
        youtube
        threads
        facebook
        number
        bigProfilePicture
        smallProfilePicture
        verified
        expoToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSubscriptionModel = /* GraphQL */ `
  mutation CreateSubscriptionModel(
    $input: CreateSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    createSubscriptionModel(input: $input, condition: $condition) {
      id
      userName
      userId
      userEmail
      planName
      planPrice
      planEvents
      planAds
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSubscriptionModel = /* GraphQL */ `
  mutation UpdateSubscriptionModel(
    $input: UpdateSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    updateSubscriptionModel(input: $input, condition: $condition) {
      id
      userName
      userId
      userEmail
      planName
      planPrice
      planEvents
      planAds
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSubscriptionModel = /* GraphQL */ `
  mutation DeleteSubscriptionModel(
    $input: DeleteSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    deleteSubscriptionModel(input: $input, condition: $condition) {
      id
      userName
      userId
      userEmail
      planName
      planPrice
      planEvents
      planAds
      startDate
      endDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      date
      startTime
      endTime
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      school
      image1
      image2
      image3
      verifiedEvent
      featuredEvent
      attendingUserIds
      location {
        nextToken
        __typename
      }
      description {
        nextToken
        __typename
      }
      contact {
        nextToken
        __typename
      }
      specialAccommodation {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      date
      startTime
      endTime
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      school
      image1
      image2
      image3
      verifiedEvent
      featuredEvent
      attendingUserIds
      location {
        nextToken
        __typename
      }
      description {
        nextToken
        __typename
      }
      contact {
        nextToken
        __typename
      }
      specialAccommodation {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      eventName
      eventPrivacy
      eventType
      smallDescription
      ageLimit
      ticketInfo
      date
      startTime
      endTime
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      school
      image1
      image2
      image3
      verifiedEvent
      featuredEvent
      attendingUserIds
      location {
        nextToken
        __typename
      }
      description {
        nextToken
        __typename
      }
      contact {
        nextToken
        __typename
      }
      specialAccommodation {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      country
      city
      province
      postalCode
      address
      longitude
      latitude
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      id
      aboutEvent
      schedule
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createSpecialAccommodation = /* GraphQL */ `
  mutation CreateSpecialAccommodation(
    $input: CreateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    createSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSpecialAccommodation = /* GraphQL */ `
  mutation UpdateSpecialAccommodation(
    $input: UpdateSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    updateSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSpecialAccommodation = /* GraphQL */ `
  mutation DeleteSpecialAccommodation(
    $input: DeleteSpecialAccommodationInput!
    $condition: ModelSpecialAccommodationConditionInput
  ) {
    deleteSpecialAccommodation(input: $input, condition: $condition) {
      id
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      userName
      eventID
      event {
        id
        organization
        userName
        userId
        eventName
        eventPrivacy
        eventType
        smallDescription
        ageLimit
        ticketInfo
        date
        startTime
        endTime
        country
        city
        province
        postalCode
        address
        longitude
        latitude
        school
        image1
        image2
        image3
        verifiedEvent
        featuredEvent
        attendingUserIds
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDeal = /* GraphQL */ `
  mutation CreateDeal(
    $input: CreateDealInput!
    $condition: ModelDealConditionInput
  ) {
    createDeal(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      dealName
      premium
      dealPrivacy
      ageLimit
      dealType
      school
      startDate
      endDate
      startTime
      endTime
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      city
      country
      province
      address
      postalCode
      longitude
      latitude
      image1
      image2
      image3
      verifiedDeal
      featuredDeal
      attendingUserIds
      smallDescription
      aboutDeal
      schedule
      ticketInfo
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal(
    $input: UpdateDealInput!
    $condition: ModelDealConditionInput
  ) {
    updateDeal(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      dealName
      premium
      dealPrivacy
      ageLimit
      dealType
      school
      startDate
      endDate
      startTime
      endTime
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      city
      country
      province
      address
      postalCode
      longitude
      latitude
      image1
      image2
      image3
      verifiedDeal
      featuredDeal
      attendingUserIds
      smallDescription
      aboutDeal
      schedule
      ticketInfo
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal(
    $input: DeleteDealInput!
    $condition: ModelDealConditionInput
  ) {
    deleteDeal(input: $input, condition: $condition) {
      id
      organization
      userName
      userId
      dealName
      premium
      dealPrivacy
      ageLimit
      dealType
      school
      startDate
      endDate
      startTime
      endTime
      recurrenceType
      daysOfWeek
      dayOfMonth
      dayOfYear
      city
      country
      province
      address
      postalCode
      longitude
      latitude
      image1
      image2
      image3
      verifiedDeal
      featuredDeal
      attendingUserIds
      smallDescription
      aboutDeal
      schedule
      ticketInfo
      phone
      email
      website
      ig
      twitter
      snapchat
      tiktok
      youtube
      wheelchairAccessibility
      signLanguageInterpretation
      closedCaptioning
      assistiveListeningSystems
      brailleMaterials
      flexibleCommunicationOptions
      accessibleSeating
      serviceAnimalAccommodation
      sensoryAccommodations
      createdAt
      updatedAt
      __typename
    }
  }
`;

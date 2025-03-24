/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFollowRelationships = /* GraphQL */ `
  query GetFollowRelationships($id: ID!) {
    getFollowRelationships(id: $id) {
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
export const listFollowRelationships = /* GraphQL */ `
  query ListFollowRelationships(
    $filter: ModelFollowRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMyEvents = /* GraphQL */ `
  query GetMyEvents($id: ID!) {
    getMyEvents(id: $id) {
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
export const listMyEvents = /* GraphQL */ `
  query ListMyEvents(
    $filter: ModelMyEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAttendingEvents = /* GraphQL */ `
  query GetAttendingEvents($id: ID!) {
    getAttendingEvents(id: $id) {
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
export const listAttendingEvents = /* GraphQL */ `
  query ListAttendingEvents(
    $filter: ModelAttendingEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHostingEvents = /* GraphQL */ `
  query GetHostingEvents($id: ID!) {
    getHostingEvents(id: $id) {
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
export const listHostingEvents = /* GraphQL */ `
  query ListHostingEvents(
    $filter: ModelHostingEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHostingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHostingDeals = /* GraphQL */ `
  query GetHostingDeals($id: ID!) {
    getHostingDeals(id: $id) {
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
export const listHostingDeals = /* GraphQL */ `
  query ListHostingDeals(
    $filter: ModelHostingDealsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHostingDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttendingDeals = /* GraphQL */ `
  query GetAttendingDeals($id: ID!) {
    getAttendingDeals(id: $id) {
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
export const listAttendingDeals = /* GraphQL */ `
  query ListAttendingDeals(
    $filter: ModelAttendingDealsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendingDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubscriptionModel = /* GraphQL */ `
  query GetSubscriptionModel($id: ID!) {
    getSubscriptionModel(id: $id) {
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
export const listSubscriptionModels = /* GraphQL */ `
  query ListSubscriptionModels(
    $filter: ModelSubscriptionModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
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
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        aboutEvent
        schedule
        userName
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpecialAccommodation = /* GraphQL */ `
  query GetSpecialAccommodation($id: ID!) {
    getSpecialAccommodation(id: $id) {
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
export const listSpecialAccommodations = /* GraphQL */ `
  query ListSpecialAccommodations(
    $filter: ModelSpecialAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialAccommodations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
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
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: ModelDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;

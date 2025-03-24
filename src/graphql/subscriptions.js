/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFollowRelationships = /* GraphQL */ `
  subscription OnCreateFollowRelationships(
    $filter: ModelSubscriptionFollowRelationshipsFilterInput
    $userName: String
  ) {
    onCreateFollowRelationships(filter: $filter, userName: $userName) {
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
export const onUpdateFollowRelationships = /* GraphQL */ `
  subscription OnUpdateFollowRelationships(
    $filter: ModelSubscriptionFollowRelationshipsFilterInput
    $userName: String
  ) {
    onUpdateFollowRelationships(filter: $filter, userName: $userName) {
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
export const onDeleteFollowRelationships = /* GraphQL */ `
  subscription OnDeleteFollowRelationships(
    $filter: ModelSubscriptionFollowRelationshipsFilterInput
    $userName: String
  ) {
    onDeleteFollowRelationships(filter: $filter, userName: $userName) {
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
export const onCreateMyEvents = /* GraphQL */ `
  subscription OnCreateMyEvents(
    $filter: ModelSubscriptionMyEventsFilterInput
    $userName: String
  ) {
    onCreateMyEvents(filter: $filter, userName: $userName) {
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
export const onUpdateMyEvents = /* GraphQL */ `
  subscription OnUpdateMyEvents(
    $filter: ModelSubscriptionMyEventsFilterInput
    $userName: String
  ) {
    onUpdateMyEvents(filter: $filter, userName: $userName) {
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
export const onDeleteMyEvents = /* GraphQL */ `
  subscription OnDeleteMyEvents(
    $filter: ModelSubscriptionMyEventsFilterInput
    $userName: String
  ) {
    onDeleteMyEvents(filter: $filter, userName: $userName) {
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
export const onCreateAttendingEvents = /* GraphQL */ `
  subscription OnCreateAttendingEvents(
    $filter: ModelSubscriptionAttendingEventsFilterInput
    $userName: String
  ) {
    onCreateAttendingEvents(filter: $filter, userName: $userName) {
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
export const onUpdateAttendingEvents = /* GraphQL */ `
  subscription OnUpdateAttendingEvents(
    $filter: ModelSubscriptionAttendingEventsFilterInput
    $userName: String
  ) {
    onUpdateAttendingEvents(filter: $filter, userName: $userName) {
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
export const onDeleteAttendingEvents = /* GraphQL */ `
  subscription OnDeleteAttendingEvents(
    $filter: ModelSubscriptionAttendingEventsFilterInput
    $userName: String
  ) {
    onDeleteAttendingEvents(filter: $filter, userName: $userName) {
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
export const onCreateHostingEvents = /* GraphQL */ `
  subscription OnCreateHostingEvents(
    $filter: ModelSubscriptionHostingEventsFilterInput
    $userName: String
  ) {
    onCreateHostingEvents(filter: $filter, userName: $userName) {
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
export const onUpdateHostingEvents = /* GraphQL */ `
  subscription OnUpdateHostingEvents(
    $filter: ModelSubscriptionHostingEventsFilterInput
    $userName: String
  ) {
    onUpdateHostingEvents(filter: $filter, userName: $userName) {
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
export const onDeleteHostingEvents = /* GraphQL */ `
  subscription OnDeleteHostingEvents(
    $filter: ModelSubscriptionHostingEventsFilterInput
    $userName: String
  ) {
    onDeleteHostingEvents(filter: $filter, userName: $userName) {
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
export const onCreateHostingDeals = /* GraphQL */ `
  subscription OnCreateHostingDeals(
    $filter: ModelSubscriptionHostingDealsFilterInput
    $userName: String
  ) {
    onCreateHostingDeals(filter: $filter, userName: $userName) {
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
export const onUpdateHostingDeals = /* GraphQL */ `
  subscription OnUpdateHostingDeals(
    $filter: ModelSubscriptionHostingDealsFilterInput
    $userName: String
  ) {
    onUpdateHostingDeals(filter: $filter, userName: $userName) {
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
export const onDeleteHostingDeals = /* GraphQL */ `
  subscription OnDeleteHostingDeals(
    $filter: ModelSubscriptionHostingDealsFilterInput
    $userName: String
  ) {
    onDeleteHostingDeals(filter: $filter, userName: $userName) {
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
export const onCreateAttendingDeals = /* GraphQL */ `
  subscription OnCreateAttendingDeals(
    $filter: ModelSubscriptionAttendingDealsFilterInput
    $userName: String
  ) {
    onCreateAttendingDeals(filter: $filter, userName: $userName) {
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
export const onUpdateAttendingDeals = /* GraphQL */ `
  subscription OnUpdateAttendingDeals(
    $filter: ModelSubscriptionAttendingDealsFilterInput
    $userName: String
  ) {
    onUpdateAttendingDeals(filter: $filter, userName: $userName) {
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
export const onDeleteAttendingDeals = /* GraphQL */ `
  subscription OnDeleteAttendingDeals(
    $filter: ModelSubscriptionAttendingDealsFilterInput
    $userName: String
  ) {
    onDeleteAttendingDeals(filter: $filter, userName: $userName) {
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
export const onCreateSubscriptionModel = /* GraphQL */ `
  subscription OnCreateSubscriptionModel(
    $filter: ModelSubscriptionSubscriptionModelFilterInput
    $userName: String
  ) {
    onCreateSubscriptionModel(filter: $filter, userName: $userName) {
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
export const onUpdateSubscriptionModel = /* GraphQL */ `
  subscription OnUpdateSubscriptionModel(
    $filter: ModelSubscriptionSubscriptionModelFilterInput
    $userName: String
  ) {
    onUpdateSubscriptionModel(filter: $filter, userName: $userName) {
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
export const onDeleteSubscriptionModel = /* GraphQL */ `
  subscription OnDeleteSubscriptionModel(
    $filter: ModelSubscriptionSubscriptionModelFilterInput
    $userName: String
  ) {
    onDeleteSubscriptionModel(filter: $filter, userName: $userName) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onCreateEvent(filter: $filter, userName: $userName) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onUpdateEvent(filter: $filter, userName: $userName) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent(
    $filter: ModelSubscriptionEventFilterInput
    $userName: String
  ) {
    onDeleteEvent(filter: $filter, userName: $userName) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onCreateLocation(filter: $filter, userName: $userName) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onUpdateLocation(filter: $filter, userName: $userName) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $userName: String
  ) {
    onDeleteLocation(filter: $filter, userName: $userName) {
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
export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onCreateDescription(filter: $filter, userName: $userName) {
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
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onUpdateDescription(filter: $filter, userName: $userName) {
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
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
    $userName: String
  ) {
    onDeleteDescription(filter: $filter, userName: $userName) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onCreateContact(filter: $filter, userName: $userName) {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onUpdateContact(filter: $filter, userName: $userName) {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $userName: String
  ) {
    onDeleteContact(filter: $filter, userName: $userName) {
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
export const onCreateSpecialAccommodation = /* GraphQL */ `
  subscription OnCreateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onCreateSpecialAccommodation(filter: $filter, userName: $userName) {
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
export const onUpdateSpecialAccommodation = /* GraphQL */ `
  subscription OnUpdateSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onUpdateSpecialAccommodation(filter: $filter, userName: $userName) {
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
export const onDeleteSpecialAccommodation = /* GraphQL */ `
  subscription OnDeleteSpecialAccommodation(
    $filter: ModelSubscriptionSpecialAccommodationFilterInput
    $userName: String
  ) {
    onDeleteSpecialAccommodation(filter: $filter, userName: $userName) {
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
export const onCreateDeal = /* GraphQL */ `
  subscription OnCreateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $userName: String
  ) {
    onCreateDeal(filter: $filter, userName: $userName) {
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
export const onUpdateDeal = /* GraphQL */ `
  subscription OnUpdateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $userName: String
  ) {
    onUpdateDeal(filter: $filter, userName: $userName) {
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
export const onDeleteDeal = /* GraphQL */ `
  subscription OnDeleteDeal(
    $filter: ModelSubscriptionDealFilterInput
    $userName: String
  ) {
    onDeleteDeal(filter: $filter, userName: $userName) {
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

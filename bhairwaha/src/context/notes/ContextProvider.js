import React, { useState } from 'react';
import NoteContext from './NoteContext';

const ContextProvider = ({ children }) => {

    const [websiteData, setwebsiteData] = useState({
        "About": {
            "Heading": "About Bhairahawa Garden Resort",
            "Text": "<p>Home to the Gurkha soldiers and eight of the world's ten tallest mountains, including the mighty Everest, Nepal stands on the world's roof. Bhairahawa Garden Resort is a peaceful escape for travellers in the heart of Lumbini. Our 4-star retreat combines modern comforts with the cultural heritage of Buddha's birthplace. Enjoy a calm garden, delightful dining, and cosy rooms with city views. Whether exploring historic sites or relaxing with our amenities, you'll experience the true spirit of Nepal with Bhairahawa Resort.</p><p><strong>Facilities:</strong></p><p>Welcome to <strong>Bhairahawa Garden Resort,</strong> where your comfort is our top priority. We've got you covered with facilities designed to make your stay delightful. Enjoy complimentary Wi-Fi across our resort in Lumbini so you can stay connected effortlessly. Take a refreshing dip in our inviting swimming pool to beat the heat, and rest easy knowing there's hassle-free parking available. </p><p> Relax in peace at our wellness &amp; spa centre, which offers refreshing treatments for your well-being. Maintain your training routine in our well-equipped fitness facility, and relax in our sauna and steam rooms. The bar at Bhairahawa Resort Lumbini is a comfortable place to enjoy a range of beverages. Host successful events in our spacious conference and meeting rooms, adapted to all your business requirements. </p><p> For eco-conscious travellers, our resort in Lumbini offers EV charging points for electric vehicles. Explore the surroundings with ease using our convenient transportation services. Stay tuned for the upcoming addition of our casino, promising excitement and entertainment. From the moment you arrive, our hospitality shines through with welcome drinks, refreshing face towels, and traditional garlands. Your rooms at Garden Resort Lumbini have daily essentials like mineral water, a tea and coffee maker, and full amenities for your comfort.</p><p>Experience multi-cuisine delights at our resort in Lumbini, relax with a flat-screen LED TV and satellite connection, and experience the ideal room environment with hot and cold air conditioning. Our 10-passenger lift makes it easy to get around, and calming music adds to the whole experience. At Bhairahawa Garden Resort, we are dedicated to making your stay memorable and enjoyable. </p><p> We look forward to hosting you in our comfortable and welcoming retreat</p><p><br></p><p><br></p>",
            "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Hotel+Facilites/Pool.jpg",
            "video_url": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
        },
        "Advertisnment": [
            {
                "Heading": "Head",
                "Image": "Imagelink",
                "Required": true,
                "Text": "text"
            }
        ],
        "Banner": [
            {
                "Heading": "Accommodation Made Affordable",
                "Subhead": "Experience Modern Facilities in a Budget",
                "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Banner/B1.jpg",
                "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
            },
            {
                "Heading": "Gateway into Nature’s Playground",
                "Subhead": "Seek Adventure and Thrill in the Arms of Lumbini",
                "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Banner/B2.jpg",
                "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
            },
            {
                "Heading": "Flavours at its Finest",
                "Subhead": "Serving Multi-Cuisine Delights for Every Mood",
                "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/73c5cd2b-ee79-4c2b-b155-fc59880bab3f.jpg",
                "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
            }
        ],
        "Blogs": [
            {
                "Heading": "Heading 1",
                "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
                "Text": "Blog1",
                "date": "2023-10-20"
            },
            {
                "Heading": "Heading 2",
                "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
                "Text": "Blog2",
                "date": "2023-10-21"
            },
            {
                "Heading": "Heading 3",
                "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
                "Text": "Blog3",
                "date": "2023-10-22"
            },
            {
                "Heading": "Heading 4",
                "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
                "Text": "Blog4",
                "date": "2023-10-23"
            }
        ],
        "Chefs": [
            {
                "Image": "1.jpg",
                "Name": "Tim",
                "Text": "text"
            }
        ],
        "Contacts": [
            {
                "Email": "e@b.com",
                "Message": "test",
                "Subject": "test"
            }
        ],
        "DataToarrange": [
            {
                "Heading": "Things to do in Lumbini",
                "Images": [
                    {
                        "Heading": "Local food from Street Vendors",
                        "Image": "https://i0.wp.com/lindagoeseast.com/wp-content/uploads/food-tour-in-kathmandu-featured.png?fit=2774%2C2270&ssl=1",
                        "Text": "text"
                    },
                    {
                        "Heading": "Rural Expedition on Bicycle\n",
                        "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/CYCLING.jpg",
                        "Text": "text"
                    },
                    {
                        "Heading": "Moments in Meditation\n",
                        "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/MEDITATION.jpg",
                        "Text": "text"
                    },
                    {
                        "Heading": "Historic Pilgrimage",
                        "Image": "https://www.holidify.com/images/cmsuploads/compressed/bhaktapur1_20180710001255.jpg",
                        "Text": "text"
                    },
                    {
                        "Heading": "Local Cultural Heritage",
                        "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/LOCAL+CULTURAL+HERITAGE.jpg",
                        "Text": "text"
                    }
                ],
                "Text": "Surrounded by diverse flavors, landscapes, spirituality, and history, Bhairahawa Garden Resort is the closest accommodation from the birthplace of Lord Buddha. It has numerous activities to engage with. Try delicious local street food, bike to discover the countryside, and experience peaceful meditation spots. Visit historic sites like the Maya Devi Temple and involve yourself in the local cultural heritage with unique monasteries and pagodas."
            },
            {
                "Heading": "In room Dinning",
                "Text": "  Enjoy the convenience of in-room dining at Bhairahawa Garden Resort. Experience the delight of dining in your own cosy haven. From breakfast in bed to a candlelit dinner for two, our room service caters to your every craving. It's the easy way to dine without leaving your room at Lumbini's best resort."
            },
            {
                "Heading": "Restaurants",
                "Text": "Experience the luxury of fine dining at the heart of Bhairahawa Garden Resort. Our very own multi-cuisine restaurant guarantees a satisfying dining experience. Whether it's a family feast, a romantic evening, or a casual dinner, our cosy, uniquely designed venue is your perfect choice. Experience the best of Lumbini's resort dining – a delicious escape for food enthusiasts and comfort seekers alike."
            },
            {
                "Heading": "How to find Bhairahawa Garden Resort",
                "Text": "<p>Explore Bhairahawa Garden Resort in Siddharthanagar Municipality-05, Sewa Path, near Bhim Hospitality, Lumbini, Nepal. Conveniently located: </p><p><strong>Gautam Buddha International Airport: </strong>A mere 1.9 miles away, Gautam Buddha International Airport is just a 10-minute drive from our accommodation in Lumbini.</p><p> <strong>Bhairahawa Bus Park</strong>: Local Bus Services are available 24/7 at a distance of just 3 km from our Garden Resort in Lumbini.</p><p> <strong>Lumbini Station</strong>: The Nearest Railway station is the Gorakhpur Railway Station, around 122 Km from Bhairahawa Garden Resort.</p>"
            },
            {
                "Heading": "In room Dinning",
                "Text": "For all your questions about the luxurious rooms, activities, or beautiful surroundings, reach out to us using the form below. "
            },
            {
                "Heading": "In room Dinning",
                "Text": "something"
            },
            {
                "Heading": "In room Dinning",
                "Text": "something"
            },
            {
                "Heading": "Scheme_code",
                "Text": "<script type=\"application/ld+json\">\n{\n  \"@context\": \"http://schema.org\", \n  \"@type\": \"Hotel\",\n  \"name\": \"Bhairahawa Garden Resort\",\n  \"url\": \"https://bhairahawagardenresort.com/\",\n  \"logo\": \"https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/20bae61c-09ec-4822-a499-3cdd88b615f4.png\",\n  \"description\": \"Experience the luxury of the best 4-star resort and Hotel in Lumbini with serene gardens, dining, and proximity to Maya Devi Temple at Bhairahawa Garden Resort\",\n  \"sameAs\": [\n        \"https://www.facebook.com/profile.php?id=61552039402744\",\n        \"https://www.instagram.com/bhairahawagardenresort\"\n        ],\n  \"telephone\": \"+977 71-591617,\",\n  \"email\": \"info@bhairahawagardenresort.com\",\n  \"checkinTime\": \"12:00\",\n  \"checkoutTime\": \"12:00\",\n   \"address\" :  {\n    \"@type\" : \"32900\",\n    \"streetAddress\": \"Municipality 05, Siddharthanagar\",\n    \"addressLocality\": \"Muang Chiang Mai District\",\n    \"addressRegion\": \"Siddharthanagar\",\n    \"postalCode\": \"32900\",\n     \"addressCountry\": \"Nepal\"\n  },\n  \"priceRange\": \"Best Rate Guaranteed Direct\",\n  \"starRating\": { \n    \"@type\" : \"http://schema.org/Rating\",\n    \"ratingValue\": \"5\" \n  }\n  }\n}\n</script>"
            },
            {
                "Heading": "In room Dinning",
                "Text": "something"
            }
        ],
        "Engine": "https://engine.eazotel.com/?id=17714494-3c47-4f31-9f4e-585fbc799984",
        "Events": [
            {
                "Heading": "Destination Weddings:",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/DESTINATION+WEDDING.jpg",
                "Text": "Celebrate your love story at Bhairahawa Garden Resort, where weddings are magical and stress-free. Picture saying your vows surrounded by nature, a gentle breeze, and birdsong. Our resort in Lumbini combines classic charm with modern comforts, creating a perfect setting. Our team takes care of every detail, ensuring your wedding is flawless. Lumbini is the ideal backdrop for your dream destination wedding, where love, nature, and careful planning come together for an unforgettable celebration. Relax and enjoy your special day while we make it extraordinary for you.\n"
            },
            {
                "Heading": "Corporate Gatherings:",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Facilities/Events/IMG_0165+(1).jpg",
                "Text": "Host your corporate events with ease and efficiency. From brainstorming sessions to board meetings, team-building activities, and workshops, our venue ensures your corporate events run smoothly. Bhairahawa Resort near Lumbini provides modern facilities for hassle-free presentations and excellent banquet services to make your gatherings productive and enjoyable. Whether a small meeting or a large conference, elevate your corporate interactions in a space that smoothly combines functionality with comfort, making your gatherings efficient and enjoyable.\n"
            },
            {
                "Heading": "Wedding Celebrations",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Facilities/Events/Event1.jpg",
                "Text": " Picture your wedding at an ancient temple, with the beautiful Himalayan foothills as your backdrop, in our 4-star resort. The experts at Bhairahawa Garden Resort will help plan all your wedding events, from before to after the big day. We'll take care of the venues and delicious food, ensuring all your guests have a wonderful time so you and your partner can start your married life with happiness and joy.\n"
            }
        ],
        "Facilities": {
            "Accept_Cards": false,
            "Alchemy": false,
            "Babysitting": false,
            "Board": false,
            "Casino": true,
            "Concierge": false,
            "Conditinoer": false,
            "Conference_Hall": true,
            "Currency_Exchange": false,
            "Doctor": false,
            "Electricity": false,
            "Elevator": false,
            "Evpoint": true,
            "Express_checks": false,
            "FrontDesk": false,
            "Health_Club": false,
            "Housekeep": true,
            "Jacuzzi": false,
            "Laundry": true,
            "Parking": true,
            "Rooftop_Cafe": false,
            "Room_Service": true,
            "SaunaStream": true,
            "Security": false,
            "Spa": false,
            "Suncafe": false,
            "TravelTour": true,
            "Wave_Bar": true,
            "Wifi": true,
            "cofeemaker": false,
            "minibar": false,
            "restaurant": true
        },
        "Faq": [
            {
                "Answer": "Yes you will feel great view in night",
                "Question": "Is thier a good view?"
            },
            {
                "Answer": "Your Can have direct booking or payment afterwards",
                "Question": "Did we need to pay advance?"
            },
            {
                "Answer": "Yes thier is cancellation policy with 2% price deduction",
                "Question": "Is thier cancellation policy?"
            }
        ],
        "Footer": {
            "AboutText": "At our Hotel you will feel great to stay and have a good fun",
            "Address": "Nepal",
            "City": "Nepolians",
            "Email": "info@bhairahawagardenresort.com",
            "Logo": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/20bae61c-09ec-4822-a499-3cdd88b615f4.png",
            "NewsLetterText": "test",
            "Phone": "+977 71-591617",
            "WhatsApp": "+9779857085923"
        },
        "Gallery": [
            {
                "Category": "Events",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_0940.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_0983.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_0940.jpg"
                ],
                "Required": false
            },
            {
                "Category": "Restaurant",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_0940.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_0983.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Restaurant/IMG_1230.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/0cfcfd77-f877-47f5-ac30-06ca18909694.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/d5709698-4891-41e3-b016-4177db6ba723.jpg"
                ],
                "Required": true
            },
            {
                "Category": "Hotel",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/16392f85-9686-4af6-8af6-0e564a7cbef9.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/2f2f108f-8c62-434f-94f7-f73652a33967.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/2bbbeed7-d1a0-40ef-8b44-71e07303f992.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/1a705562-8025-4153-8811-ce3c7b8f32e4.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/b0a112cc-6e97-4740-8cdb-d484f6b5efce.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/7b3b5321-9eeb-4d92-aefa-5a49b109a3f7.jpg"
                ],
                "Required": true
            },
            {
                "Category": "Nearby",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Nearby/11.webp",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Nearby/33.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Nearby/11.webp",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Nearby/33.jpg"
                ],
                "Required": true
            },
            {
                "Category": "Lobby",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Lobby/l1.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Lobby/l2.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/e1e0d99c-b36d-4cb9-908f-0910d9169c64.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Lobby/l2.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/e1e0d99c-b36d-4cb9-908f-0910d9169c64.jpg"
                ],
                "Required": true
            },
            {
                "Category": "Room",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Gallery/Rooms.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Rooms/IMG_0681-HDR.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Rooms/IMG_0692-HDR.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Gallery/Rooms/IMG_0695-HDR.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/6fa2972b-9bbb-4e53-88df-eb43052dd463.jpg"
                ],
                "Required": true
            },
            {
                "Category": "Spa and Wellness",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Gallery/Spa_Wellness.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Gallery/Spa_Wellness.jpg",
                    
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Gallery/Spa_Wellness.jpg",
                    
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Gallery/Spa_Wellness.jpg",
                ],
                "Required": false
            },
            {
                "Category": "Bar",
                "Images": [
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/99cafaeb-26cd-4ed8-b8d1-ff797f60cd60.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/99cafaeb-26cd-4ed8-b8d1-ff797f60cd60.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/99cafaeb-26cd-4ed8-b8d1-ff797f60cd60.jpg",
                    "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/99cafaeb-26cd-4ed8-b8d1-ff797f60cd60.jpg"
                ],
                "Required": false
            },
            {
                "Category": "Guests",
                "Images": [
                    "https://d1ias3p97xmuek.cloudfront.net/myplacehotels.com-341489493/cms/cache/v2/63e16447a4bee.jpg/380x310/fit/80/9d7fe4dab160bddcd75a65159277a3ed.jpg",
                    "https://d1ias3p97xmuek.cloudfront.net/myplacehotels.com-341489493/cms/cache/v2/63e16447a4bee.jpg/380x310/fit/80/9d7fe4dab160bddcd75a65159277a3ed.jpg",
                    "https://d1ias3p97xmuek.cloudfront.net/myplacehotels.com-341489493/cms/cache/v2/63e16447a4bee.jpg/380x310/fit/80/9d7fe4dab160bddcd75a65159277a3ed.jpg",
                    "https://d1ias3p97xmuek.cloudfront.net/myplacehotels.com-341489493/cms/cache/v2/63e16447a4bee.jpg/380x310/fit/80/9d7fe4dab160bddcd75a65159277a3ed.jpg",
                ],
                "Required": false
            }
        ],
        "HotelAdvr": {
            "Image": "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
            "heading": "Enjoy your Days with us",
            "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
        },
        "Images": [
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z2/IMG_0925.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/8f88ed4e-09b1-4ac4-bbc9-cd282cae0499.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/72.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/6129db63-89c7-4c94-8faf-f8a59693613c.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/22.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/About_us_Section/Hotel_Features_Picture/IMG_0869.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/13.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/fe8dc8b5-b73b-46c4-974f-3b6b1821ae23.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/c51294e5-0a58-4376-aa0a-fd96bfa253d0.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/632a5c9d-af3a-49ef-b32a-f91ade54ea33.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/9003ee64-7e83-4b0a-8fe6-5f6a3eaf0d09.jpg"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/b8ed41e3-1e25-45a3-8e3f-9eda4d02b47f.jpg"
            }
        ],
        "Links": {
            "Facebook": "https://www.facebook.com/profile.php?id=61552039402744",
            "FacebookRequired": true,
            "Instagram": "https://instagram.com/bhairahawagardenresort?igshid=OGQ5ZDc2ODk2ZA==",
            "InstagramRequired": true,
            "Linkedin": "https://www.linkedin.com/company/97210441/admin/feed/posts/",
            "LinkedinRequired": true,
            "Tripadvisors": "test",
            "TripadvisorsRequired": false,
            "Twitter": "https://www.twitter.com/Bhairahawa Garden Resort",
            "TwitterRequired": false,
            "Youtube": "https://www.youtube.com/Bhairahawa Garden Resort",
            "YoutubeRequired": false
        },
        "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14155.300853717717!2d83.4537145!3d27.5058108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969ba7f8e90315%3A0x51f86c44a49510ed!2sBhairahawa%20Garden%20Resort!5e0!3m2!1sen!2sin!4v1697194298013!5m2!1sen!2sin",
        "Menu": [
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/KEBABS.jpeg",
                "Name": "Indian",
                "Price": "300"
            },
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/BURGER.jpeg",
                "Name": "American",
                "Price": "200"
            },
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/CONTINENTAL+FOOD.jpg",
                "Name": "Continental",
                "Price": "150"
            },
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/NOODLES.jpg",
                "Name": "Chinese",
                "Price": "300"
            },
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/PASTA.jpeg",
                "Name": "Italian",
                "Price": "400"
            },
            {
                "Description": "Awesome food",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/MOMOS+3.jpg",
                "Name": "Nepalese",
                "Price": "600"
            }
        ],
        "Navbar": {
            "About": true,
            "Contact": true,
            "Gallery": true,
            "Home": true,
            "Restaurant": true,
            "Room": true,
            "Service": true,
            "TermCondition": true,
            "Testimonial": true
        },
        "Nearby": [
            {
                "Description": "Amzing place",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/lumbini-nepal-birthplace-buddha-siddhartha-gautama.jpg",
                "Place": "Maya Devi Temple"
            },
            {
                "Description": "Amzing place",
                "Image": "https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/a00983a0-9883-41bb-a6d2-cc54298456bd-museum-cover.jpg?q=90",
                "Place": "Lumbini Museum"
            },
            {
                "Description": "Amzing place",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/TANSEN+1.jpg",
                "Place": "Tansen Bazar\n"
            },
            {
                "Description": "Amzing place",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/SHANTI+STUPA.jpeg",
                "Place": "Pokhara\n"
            },
            {
                "Description": "Amzing place",
                "Image": "https://bodhgaya.tourismindia.co.in/images/places-to-visit/header/wat-thai-buddhagaya-thai-monastery-bodh-gaya-tourism-entry-fee-timings-holidays-reviews-header.jpg",
                "Place": "Thai Monastery\n"
            }
        ],
        "NewsletterData": [],
        "PagesTitles": {
            "1": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "About": {
                "Description": "OUR PLACE, OUR SERVICES & OUR TEAM",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/9274e7cb-244e-4271-ba12-cbe8dc6d8944.jpg",
                "Title": "THE HOTEL",
                "Video": ""
            },
            "Blogs": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Bookings": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Cancellation": {
                "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/13.jpg",
                "Title": "CANCELLATION POLICY",
                "Video": ""
            },
            "Contact": {
                "Description": "Don’t Leave it Unsaid! ",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Contact/Banner/contactus.png",
                "Title": "CONTACT US",
                "Video": ""
            },
            "Events": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Facilities": {
                "Description": "Meeting the needs of the modern-day traveller",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Facilities/Banner/Bannerrr.png",
                "Title": "FACILITIES",
                "Video": ""
            },
            "Gallery": {
                "Description": "Capturing Experiences in Every Frame\n",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/10.jpg",
                "Title": "GALLERY",
                "Video": ""
            },
            "Nearby": {
                "Description": "Explore Wonders of food, fashion, and forts, just steps away from your accommodation in Mandrem.",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/10.jpg",
                "Title": "NEARBY PLACES",
                "Video": ""
            },
            "Our Rooms": {
                "Description": "Comfortable Retreats for Every Traveller at SPARV resort in Mandrem.",
                "Image": "",
                "Title": "OUR ROOMS",
                "Video": ""
            },
            "Privacy": {
                "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/11.jpg",
                "Title": "PRIVACY POLICY",
                "Video": ""
            },
            "Restaurant": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Rooms": {
                "Description": "WHERE COMFORT MEETS CONVENIENCE",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Rooms+_+Suites+Section/Banner/Banner1.png",
                "Title": "ROOMS & SUITES",
                "Video": ""
            },
            "Services": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Teams": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            },
            "Terms": {
                "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/initial/112.jpg",
                "Title": "TERMS & CONDITIONS",
                "Video": ""
            },
            "Testimonial": {
                "Description": "",
                "Image": "",
                "Title": "",
                "Video": ""
            }
        },
        "PromotionalPopups": {
            "Heading": "head",
            "Image": "image",
            "Required": false,
            "Text": "text"
        },
        "Reviews": {
            "Analytics": "G-XHEWJNC1QC",
            "Clarity": "jndmm19v7t",
            "Console": "google-site-verification=5kSF_98PXrSr4-7NTK3Ez2yg7biU-SipFM6qEk6TCcs",
            "Facebook": "",
            "Google": "ChIJFQPp-KebljkR7RCVpERs-FE",
            "Instagram": "",
            "Pagespeed": "",
            "Pixel": "",
            "TagManager": "GTM-W7DS8TZX",
            "Tripadvisors": "",
            "Write": ""
        },
        "SectionTitles": {
            "1": {
                "Description": "02:00 PM",
                "Title": "Checkin"
            },
            "2": {
                "Description": "12:00 noon",
                "Title": "Checkout"
            },
            "3": {
                "Description": "<p>Children up to 8 years old can stay on a complimentary basis (without an extra bed).</p><p>Children above eight are chargeable as per applicable rates.</p><p>Pets are not allowed.</p><p>Early check-in is subject to availability.</p><p>Breakfast is served from 7:00 AM to 10:00 AM.</p><p>Smoking is prohibited in rooms; please use designated outdoor areas.</p><p>Prior approval is required for events, weddings, and commercial activities.</p>",
                "Title": "rules"
            },
            "4": {
                "Description": "",
                "Title": ""
            },
            "5": {
                "Description": "",
                "Title": ""
            },
            "6": {
                "Description": "",
                "Title": ""
            },
            "7": {
                "Description": "",
                "Title": ""
            },
            "About": {
                "Description": "",
                "Title": ""
            },
            "Bookings": {
                "Description": "",
                "Title": ""
            },
            "Facilities": {
                "Description": "With the Best Luxury Spa, Salon and Fitness Experiences.\n",
                "Title": "Hotel Facilities"
            },
            "Gallery": {
                "Description": "Moments Captured, Memories Made",
                "Title": "Gallery"
            },
            "Insta": {
                "Description": "",
                "Title": ""
            },
            "Nearby": {
                "Description": " A Selection of Iconic Sites Related to Architecture, Mythology and Historic Culture\n.",
                "Title": "Near By PLACES\n"
            },
            "OurRooms": {
                "Description": "Luxury Living Tailored to Every Budget at Bhairahawa Resort in Lumbini.",
                "Title": "Our Rooms\n"
            },
            "Rooms": {
                "Description": "Inviting for a Memorable Stay!\n",
                "Title": "Rooms Accommodation\n"
            },
            "Services": {
                "Description": "With the Best Luxury Spa, Salon and Fitness Experiences.",
                "Title": "Services"
            },
            "Testimonial": {
                "Description": "",
                "Title": "Testimonial"
            }
        },
        "SectionsVisible": {
            "About": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": false,
                "Rooms": true,
                "Teams": false,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Blogs": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Booking": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Contact": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Events": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Facility": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": false,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": false,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Gallery": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": false,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": false,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Home": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Insta": false,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": false,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": false
            },
            "Nearby": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Reservation": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Restaurant": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Rooms": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Services": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Spa": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Teams": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "TermsConditions": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            },
            "Testimonial": {
                "AboutUs": true,
                "Banner": true,
                "Blogs": true,
                "Facilities": true,
                "HotelAd": true,
                "Images": true,
                "Map": true,
                "Nearby": true,
                "Rooms": true,
                "Teams": true,
                "Testimonials": true,
                "Whatsapp": true,
                "YoutubeVideo": true
            }
        },
        "SeoOptimisation": [
            {
                "Data": {
                    "Description": "Experience the luxury of the best 4-star resort and Hotel in Lumbini with serene gardens, dining, and proximity to Maya Devi Temple at Bhairahawa Garden Resort",
                    "Title": "4 Star hotel in Siddharthnagar Nepal | Bhairahawa Garden Resort in Lumbini",
                    "keyword": "Keyword"
                },
                "PageName": "Home"
            },
            {
                "Data": {
                    "Description": "Experience the best at Bhairahawa Resort, the top choice for a comfortable and relaxing stay in Lumbini. Enjoy peaceful surroundings, top-notch amenities, and friendly service.",
                    "Title": "Bhairahawa Resort: Experience the best stay in Lumbini",
                    "keyword": "Keyword"
                },
                "PageName": "About"
            },
            {
                "Data": {
                    "Description": "Enjoy a comfortable and peaceful getaway in Lumbini with all modern facilities. Contact Bhairahawa Garden Resort for more details.",
                    "Title": "Contact us - Bhairahawa Garden Resort",
                    "keyword": "Keyword"
                },
                "PageName": "Contact"
            },
            {
                "Data": {
                    "Description": "Nearby description",
                    "Title": "Nearby Page",
                    "keyword": "Keyword"
                },
                "PageName": "Nearby Attraction"
            },
            {
                "Data": {
                    "Description": "Explore the exceptional facilities at Bhairahawa Resort, a Best Restaurants in Lumbin. Discover the perfect blend of luxury and nature. Visit us!",
                    "Title": "Best Restaurants in Lumbini |  Dinning Table in Siddharthnagar Nepal",
                    "keyword": "Keyword"
                },
                "PageName": "Facilities"
            },
            {
                "Data": {
                    "Description": "Take a virtual tour through Bhairahawa Resort gallery. See the tranquil rooms, lush surroundings, and inviting spaces of resort near Lumbini.",
                    "Title": "Gallery Beauty - Bhairahawa Garden Resort",
                    "keyword": "Keyword"
                },
                "PageName": "Gallery"
            },
            {
                "Data": {
                    "Description": "Enjoy the luxury Deluxe room and Suit Room in Lumbini at 4 star hotel at @Bhairahawa Garden Resort. Book your premier room on our resort!",
                    "Title": "Lumbini Deluxe room | Best Suit Room - Bhairahawa Garden Resort",
                    "keyword": "Keyword"
                },
                "PageName": "Rooms"
            },
            {
                "Data": {
                    "Description": "Reservations",
                    "Title": "Reservations",
                    "keyword": "Keyword"
                },
                "PageName": "Reservations"
            },
            {
                "Data": {
                    "Description": "Experience the luxury of  the best 4-star resort in Lumbini with serene gardens, dining, and proximity to Maya Devi Temple at Bhairahawa Garden Resort.",
                    "Title": "Bhairahawa Garden Resort: 4-Star Resort in Lumbini",
                    "keyword": "Keyword"
                },
                "PageName": "Terms and condition"
            },
            {
                "Data": {
                    "Description": "Services description",
                    "Title": "Services Page",
                    "keyword": "Keyword"
                },
                "PageName": "Services"
            },
            {
                "Data": {
                    "Description": "Restaurants description",
                    "Title": "Restaurants Page",
                    "keyword": "Keyword"
                },
                "PageName": "Restaurants"
            },
            {
                "Data": {
                    "Description": "Testimonials description",
                    "Title": "Testimonials Page",
                    "keyword": "Keyword"
                },
                "PageName": "Testimonials"
            },
            {
                "Data": {
                    "Description": "Teams description",
                    "Title": "Teams Page",
                    "keyword": "Keyword"
                },
                "PageName": "Teams"
            },
            {
                "Data": {
                    "Description": "Blogs description",
                    "Title": "Blogs",
                    "keyword": "Keyword"
                },
                "PageName": "Blogs"
            },
            {
                "Data": {
                    "Description": "Blogs description",
                    "Title": "Faq page",
                    "keyword": "Keyword"
                },
                "PageName": "Events"
            },
            {
                "Data": {
                    "Description": "Experience the luxury of  the best 4-star resort in Lumbini with serene gardens, dining, and proximity to Maya Devi Temple at Bhairahawa Garden Resort.",
                    "Title": "Bhairahawa Garden Resort: 4-Star Resort in Lumbini",
                    "keyword": "Keyword"
                },
                "PageName": "Cancellation"
            }
        ],
        "Services": [
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Hotel+Facilites/Pool.jpg",
                "Text": "Swim Your Stress Away",
                "Title": "Swimming pool"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/image/Z1/Home+/Hotel+Facilites/Bar.jpg",
                "Text": "Sip and Socialize",
                "Title": "Bar"
            },
            {
                "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/bhairahawagardenresort/images/LatestImages/SAUNA+_+STEAM+1.jpg",
                "Text": "Sweat Away Stress",
                "Title": "Sauna & Steam"
            }
        ],
        "Slugs": {
            "About": {
                "PageName": "about.html",
                "PageTitle": "About",
                "SeoData": 1,
                "Slug": "About",
                "sectionVisible": "About"
            },
            "Blogs": {
                "PageName": "404.html",
                "PageTitle": "Blogs",
                "SeoData": 13,
                "Slug": "Blogs",
                "sectionVisible": "Blogs"
            },
            "Cancellation": {
                "PageName": "cancellation.html",
                "PageTitle": "Cancellation",
                "SeoData": 15,
                "Slug": "Cancellation-Policy",
                "sectionVisible": "TermsConditions"
            },
            "Contact": {
                "PageName": "contact.html",
                "PageTitle": "Contact",
                "SeoData": 2,
                "Slug": "Contact",
                "sectionVisible": "Contact"
            },
            "Events": {
                "PageName": "404.html",
                "PageTitle": "Faq",
                "SeoData": 14,
                "Slug": "Faq",
                "sectionVisible": "Faq"
            },
            "Facilities": {
                "PageName": "facility.html",
                "PageTitle": "Facilities",
                "SeoData": 4,
                "Slug": "Facilities",
                "sectionVisible": "Facility"
            },
            "Faq": {
                "PageName": "404.html",
                "PageTitle": "Faq",
                "SeoData": 14,
                "sectionVisible": "Faq"
            },
            "Gallery": {
                "PageName": "gallery1.html",
                "PageTitle": "Gallery",
                "SeoData": 5,
                "Slug": "Gallery",
                "sectionVisible": "Gallery"
            },
            "Nearby_Attraction": {
                "PageName": "404.html",
                "PageTitle": "Nearby",
                "SeoData": 3,
                "Slug": "Nearby-Attraction",
                "sectionVisible": "Nearby"
            },
            "Privacy": {
                "PageName": "privacy.html",
                "PageTitle": "Privacy",
                "SeoData": 8,
                "Slug": "Privacy-Policy",
                "sectionVisible": "TermsConditions"
            },
            "Reservations": {
                "PageName": "404.html",
                "PageTitle": "Bookings",
                "SeoData": 7,
                "Slug": "Reservations",
                "sectionVisible": "Booking"
            },
            "Restaurants": {
                "PageName": "404.html",
                "PageTitle": "Restaurant",
                "SeoData": 10,
                "Slug": "Restaurants",
                "sectionVisible": "Restaurant"
            },
            "Rooms": {
                "PageName": "rooms-category.html",
                "PageTitle": "Rooms",
                "SeoData": 6,
                "Slug": "Rooms",
                "sectionVisible": "Rooms"
            },
            "Services": {
                "PageName": "404.html",
                "PageTitle": "Services",
                "SeoData": 9,
                "Slug": "Services",
                "sectionVisible": "Services"
            },
            "Teams": {
                "PageName": "404.html",
                "PageTitle": "Teams",
                "SeoData": 12,
                "Slug": "Teams",
                "sectionVisible": "Teams"
            },
            "Terms_and_condition": {
                "PageName": "terms.html",
                "PageTitle": "Terms",
                "SeoData": 8,
                "Slug": "Terms-And-Conditions",
                "sectionVisible": "TermsConditions"
            },
            "Testimonials": {
                "PageName": "404.html",
                "PageTitle": "Testimonial",
                "SeoData": 11,
                "Slug": "Testimonials",
                "sectionVisible": "Testimonial"
            }
        },
        "Team": [
            {
                "Designation": "Owner",
                "Name": "Stuart",
                "Text": "Hello Guys, I m Stuart",
                "url": "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
            },
            {
                "Designation": "Manager",
                "Name": "Alex",
                "Text": "Hello Guys, I m Alex",
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsB24jf0J49bJ5q44gByglBeN4hqr87envEztPiCRB_8tXhlANIeQMUR_78hy7vXs1BzY&usqp=CAU"
            },
            {
                "Designation": "Jr. Manager",
                "Name": "George",
                "Text": "Hello Guys, I m George",
                "url": "https://tirururbanbank.com/wp-content/uploads/2017/04/team1.jpg"
            }
        ],
        "TermsConditions": [
            {
                "Privacy": "<p>This Privacy Policy outlines how Bhairahawa Garden Resort, Nepal (\"we,\" \"our,\" or \"us\") collects, uses, discloses, and protects your personal information. We are committed to safeguarding your privacy and ensuring the security of your data. By accessing our services, making reservations, or interacting with our website, you agree to the practices described in this Privacy Policy. </p><ol><li>Information We Collect:<ul><li>Personal Information: We may collect personal information, including but not limited to your name, contact details, address, payment information, and identification documents when you make reservations or use our services.</li><li>Website Usage Data: We collect non-personal information, such as your IP address, browser type, device information, and browsing patterns when you visit our website. This information helps us improve our website and services.</li></ul></li><li>How We Use Your Information:<ul><li>Reservations and Services: We use your personal information to process reservations, provide services, and communicate with you about your stay.</li><li>Customer Support: We may use your information to respond to your inquiries and provide customer support.</li><li>Marketing and Promotions: With your consent, we may send you marketing materials, offers, and promotions. You can opt out of these communications at any time.</li><li>Analytics: We use website usage data to improve our website's functionality and user experience.</li></ul></li><li>Information Sharing:<ul><li>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</li><li>We may share your information with third-party service providers, such as payment processors and IT service providers, to assist in providing our services.</li><li>We may share information with law enforcement or government authorities to comply with legal obligations or protect our rights and property.</li></ul></li><li>Data Security:<ul><li>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li></ul></li><li>Cookies and Tracking Technologies:<ul><li>We use cookies and similar tracking technologies to enhance your website experience and gather usage data.</li><li>You can manage your cookie preferences through your browser settings.</li></ul></li><li>Links to Third-Party Sites:<ul><li>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites</li></ul></li><li>.Children's Privacy:<ul><li>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children.</li></ul></li><li>Your Rights:<ul><li>You can access, correct, or delete your personal information.</li><li>You can withdraw your consent for marketing communications at any time.</li></ul></li><li>Changes to this Privacy Policy:<ul><li>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes.</li></ul></li><li>Contact Us:<ul><li>If you have questions or concerns regarding this Privacy Policy or our data practices, please contact us at(email ).</li></ul></li></ol><p>Please review this Privacy Policy regularly for updates. Your continued use of our services signifies your acceptance of any changes to this policy.</p>"
            },
            {
                "Cancellation": "<ul><li>Guests are required to notify the hotel about cancellations at least 48 hours before their scheduled arrival.</li><li>Confirmed group bookings must be communicated in writing 45 days prior to the group's arrival.</li><li>Additionally, cancellations made within 48 hours of the guest's arrival will incur a 25% supplement charge.</li><li>Cancellations made within 24 hours will incur a 100% supplement charge.</li><li>Cancellations made within less than the specified time frame will incur a charge equivalent to one night's room fee.</li></ul>"
            },
            {
                "TermsServices": "<ol><li>Booking and Reservation:<ul><li>Reservations can be made online through our website, in person, or via authorized third-party booking platforms.</li><li>Room rates and availability are subject to change without notice. It is advisable to confirm the current rates and availability before making a reservation.</li><li>All reservations require a valid credit card or advance payment to secure the booking.</li></ul></li><li>Check-In and Check-Out:<ul><li>Check-in is from 14:00 onward, and check-out time is 12 noon.</li><li>Early check-in and late check-out are subject to availability and may incur additional charges.</li></ul></li><li>Payment and Cancellation:<ul><li>Payment for your stay, including taxes and any additional charges, must be settled upon check-in.</li><li>Cancellation policies vary based on the rate plan chosen. Please review your reservation confirmation for specific cancellation terms.</li></ul></li><li>Property Rules and Regulations:<ul><li>Smoking is strictly prohibited inside all indoor areas of the Property. Designated smoking areas are available.</li><li>Pets are prohibited if no prior arrangements have been made with the Property.</li><li>Parties and gatherings that disturb the peace and comfort of other guests are not permitted.</li><li>Please respect the Property's noise policies, especially during quiet hours.</li></ul></li><li>Facilities and Amenities:<ul><li>Use of the swimming pool at the best resort in Lumbini is subject to posted rules and hours of operation. Lifeguards may not be on duty; swim at your own risk.</li><li>Sea-view rooms at Bhairahawa Resort are assigned based on availability and room category booked.</li></ul></li><li>Liability:<ul><li>Bhairahawa Garden Resort is not liable for loss, theft, or damage to personal belongings during your stay.</li><li>Guests are responsible for any damage to the Property or its facilities caused by their actions.</li></ul></li><li>Privacy and Data Protection:<ul><li>By making a reservation at the best resort in Lumbini, you consent to collecting and using your personal information following our Privacy Policy.</li></ul></li><li>Dispute Resolution:<ul><li>Any disputes or claims arising from your stay at the Property shall be governed by the laws of the jurisdiction where the Property is located.</li><li>All disputes shall be resolved through arbitration or mediation per applicable laws.</li></ul></li><li>Modification of Terms:<ul><li>Bhairahawa Garden Resort reserves the right to modify or update these Terms without prior notice. Please check our website for the most current version of the Terms. </li></ul></li></ol><p>By booking a stay at the best resort in Lumbini, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions. If you do not agree with these Terms, please do not proceed with your reservation. Please contact our customer service team for assistance if you have any questions or concerns. </p><p> <strong>Bhairahawa Garden Resort, Nepal</strong></p>"
            }
        ]
    })

    const [slugs, setslugs] = useState(websiteData.Slugs)
    const [PageTitle, setPageTitles] = useState(websiteData.PagesTitles)
    const [SeoData, setSeoData] = useState(websiteData.SeoOptimisation)
    const [Banner, setBanner] = useState(websiteData.Banner)
    const [Footer, setFooter] = useState(websiteData.Footer)
    const [About, setAbout] = useState(websiteData.About)
    const [Nearby, setNearby] = useState(websiteData.Nearby)
    const [DataToarrange, setDataToarrange] = useState(websiteData.DataToarrange)
    const [Menu, setMenu] = useState(websiteData.Menu)
    const [SectionTitles, setSectionTitles] = useState(websiteData.SectionTitles)
    const [Engine, setEngine] = useState(websiteData.Engine)
    const [Gallery, setGallery] = useState(websiteData.Gallery)
    const [Location, setLocation] = useState(websiteData.Location)
    const [Links, setLinks] = useState(websiteData.Links)

    

    

    // WEBSITE DATA API
    // Rooms API
    // Reviews API
    const [Reviews, setReviews] = useState([])
    const ReviewsAPI = async () => {
        try {
            const response = await fetch(`https://nexon.eazotel.com/google/reviews/17714494-3c47-4f31-9f4e-585fbc799984`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            setReviews(json.Reviews)
        } catch (error) {
            console.error("Error fetching check-in data:", error);
        }
    }

    return (
        <NoteContext.Provider value={{
            websiteData, slugs, PageTitle, SeoData, Banner, Footer, About, DataToarrange, Nearby, Menu, SectionTitles, Location, Engine, Gallery,Links,

            // Reviews
            ReviewsAPI, Reviews
        }}>
            {children}
        </NoteContext.Provider>
    );
};

export default ContextProvider;
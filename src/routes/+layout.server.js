import { derived, writable } from 'svelte/store';
import { 
  auth, 
  app,
  db
} from '$lib/firebase/config.js';

import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { isSecondHand } from '../components/Listing.svelte';

const getListings = async () => {
    const listings = collection(db, "listings");
    let res = [];
    const querySnapshot = await getDocs(listings)
    querySnapshot.forEach(s => {
        res.push(s.data());
    })
    return new Promise(resolve => {
        resolve(res);
    })
}

const dummyData = [
    {
      "bAVhgv3h4wEnIazNbuec": {
        "creatorUid": "dummy_creator_uid_1",
        "description": "Dummy description for bAVhgv3h4wEnIazNbuec",
        "isSecondHand": false,
        "name": "Dummy name 1",
        "thumbnail": "dummy_thumbnail_1.jpg",
        "value": 100
      }
    },
    {
      "yCBN2rT2hkjX8fQo": {
        "creatorUid": "dummy_creator_uid_2",
        "description": "Dummy description for yCBN2rT2hkjX8fQo",
        "isSecondHand": false,
        "name": "Dummy name 2",
        "thumbnail": "dummy_thumbnail_2.jpg",
        "value": 200
      }
    },
    {
      "7fMnGxu4Pq3KcHLS": {
        "creatorUid": "dummy_creator_uid_3",
        "description": "Dummy description for 7fMnGxu4Pq3KcHLS",
        "isSecondHand": false,
        "name": "Dummy name 3",
        "thumbnail": "dummy_thumbnail_3.jpg",
        "value": 300
      }
    },
    {
      "9sdRwKXm5t2Nz8Qv": {
        "creatorUid": "dummy_creator_uid_4",
        "description": "Dummy description for 9sdRwKXm5t2Nz8Qv",
        "isSecondHand": false,
        "name": "Dummy name 4",
        "thumbnail": "dummy_thumbnail_4.jpg",
        "value": 400
      }
    },
    {
      "4J3cHNDRSuiQrKPE": {
        "creatorUid": "dummy_creator_uid_5",
        "description": "Dummy description for 4J3cHNDRSuiQrKPE",
        "isSecondHand": false,
        "name": "Dummy name 5",
        "thumbnail": "dummy_thumbnail_5.jpg",
        "value": 500
      }
    }
  ]
  

const writeDummyData = async () => {
    const ref = collection(db, "listings");
    dummyData.forEach(async data => {

        let key = Object.keys(data)[0];
        console.log(key);
        await setDoc(doc(ref, key), {
            creatorUid: data[key].creatorUid,
            description: data[key].description,
            isSecondHand: data[key].isSecondHand,
            name: data[key].name,
            thumbnail: data[key].thumbnail,
            vaue: data[key].value
        })
    })
}

export const load = async () => {
    let listings = await getListings();
    return {
        auth: JSON.stringify(auth),
        app: JSON.stringify(app),
        listings: JSON.stringify(listings)
    }
}
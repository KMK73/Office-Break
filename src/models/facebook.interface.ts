export interface FacebookProfile {
    uid?: string; 
    displayName?: string; 
    photoURL?: string; 
    email?: string; 
    providerData?: [
        {
            uid?: string; 
            displayName?: string; 
            photoURL?: string; 
            email?: string; 
            phoneNumber?: number; 
            apiKey?: string;  
        }
    ] 
    stsTokenManager?: [
        {
            apiKey?: string; 
            refreshToken?: string; 
            accessToken?: string; 
            expirationTime?: number; 
            redirectEventId?: number; 
        }
    ]
}

/*
uid : "ZqRCGC82LCUpTh7874gzHnvGxzt1"
displayName : "Kelsey Maguire"
photoURL : "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/13407124_10154311793934456_792851854847987058_n.jpg?oh=66c768112bb4c849abe881ee03b11b14&oe=59EC46CC"
email : "kelsey.kjeldsen@gmail.com"
emailVerified : false
phoneNumber : null
isAnonymous : false
providerData
    0
        uid : "10155737124574456"
        displayName : "Kelsey Maguire"
        photoURL : "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/13407124_10154311793934456_792851854847987058_n.jpg?oh=98e7f1e868cdc5ba43896c9690cc9546&oe=5A13D3CC"
        email : "kelsey.kjeldsen@gmail.com"
        phoneNumber : null
        providerId : "facebook.com"
        apiKey : "AIzaSyD3Y3eAtI-8pSr6vB9hcNJ9cDpTDAgEuO0"
        appName : "[DEFAULT]"
        authDomain : "office-break.firebaseapp.com"
stsTokenManager
    apiKey : "AIzaSyD3Y3eAtI-8pSr6vB9hcNJ9cDpTDAgEuO0"
    refreshToken : "APRrRCKembJGndpyKhas6oErc72c-hYMH9yrO7H2A705vTen6WR-Jj663nC2OsXvQTbrYV5b2egdFFHzQNb1egJ2bnI7oiz4TZLj45B-d6ijBIs2ETxWsaEm7hBz7_cnjwChFMRIlmT7RXqY-weNZdh1cXxbwp1FkbITfp-s65Rop85bwJ57tegyAMeatSt1ZcbXe-TF7TfiCicxd5dPY-DOiGitwB12HUjjCT5tp7--gg7MZ0Y5c0PGoqgkUPUDPuZHBeENR2YU9wqD_0tv5G_9IKQzf9fkRJM-RqoQyacy7D6LCbkXVx2qYTKgm6xik7-I9rb0ICl6JkYaBByIwyektG3iqCJleXr-YXvER4xt6zvlYkzrmmYk5S7a9VNqOEm-gv6DhkkXBK68kuYH2Clvu1QQ5UdNLRfkQq1_YSIE9j8aL5-lRLAjJq4AouGMXjpdDqghqvdT"
    accessToken : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM5NDdjNDA4YzhkZDA1M2Y3ZTEzMTE3YzRlMDBmMGIyYjE2ZGM3ODkifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vb2ZmaWNlLWJyZWFrIiwibmFtZSI6IktlbHNleSBNYWd1aXJlIiwicGljdHVyZSI6Imh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvdDEuMC0xL3AxMDB4MTAwLzEzNDA3MTI0XzEwMTU0MzExNzkzOTM0NDU2Xzc5Mjg1MTg1NDg0Nzk4NzA1OF9uLmpwZz9vaD02NmM3NjgxMTJiYjRjODQ5YWJlODgxZWUwM2IxMWIxNCZvZT01OUVDNDZDQyIsImF1ZCI6Im9mZmljZS1icmVhayIsImF1dGhfdGltZSI6MTUwMzI3MDQ3MCwidXNlcl9pZCI6IlpxUkNHQzgyTENVcFRoNzg3NGd6SG52R3h6dDEiLCJzdWIiOiJacVJDR0M4MkxDVXBUaDc4NzRnekhudkd4enQxIiwiaWF0IjoxNTAzMjcwNDcwLCJleHAiOjE1MDMyNzQwNzAsImVtYWlsIjoia2Vsc2V5LmtqZWxkc2VuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJmYWNlYm9vay5jb20iOlsiMTAxNTU3MzcxMjQ1NzQ0NTYiXSwiZW1haWwiOlsia2Vsc2V5LmtqZWxkc2VuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImZhY2Vib29rLmNvbSJ9fQ.cPED-eAfzFQVLOBrwSpVU2Q8p22b1XOQYqCdTu_y0X_CFZIuWmu6O1YpB0L6t247AxG5k5ifVklwSblVnMAhlgH3ysu6OaUqS5ZQX7rDtKKPmm8m9PhVBidjqSHvzYnE4O5IMOC1neYSjmndoDxLtiwCaZJHgWU_y0prq9XEVoLOpilOlNqFu9prr74-kBPjxVJ6dztpJlZFRaEkhrZhnXL998FIGlSAiz_ETNqvYApd22VPllYXWR7R-zu4EETzxcQ3CHyiU62WmWypHihhmibnSlRRdmeX_QsH_BTGt3uDsn6C808ZALvpKvggSH4yZUhcR1105nDDardl0nzv9Q"
    expirationTime : 1503274070960
    redirectEventId : null
*/
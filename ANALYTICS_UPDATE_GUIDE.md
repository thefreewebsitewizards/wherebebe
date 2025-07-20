# Analytics Data Update Guide

## Overview
The portfolio analytics section now supports dynamic data updates through a JSON configuration file. This allows you to easily update statistics without modifying HTML or JavaScript code.

## How to Update Analytics Data

### 1. Locate the Data File
The analytics data is stored in: `analytics-data.json`

### 2. Edit the JSON File
Open `analytics-data.json` in any text editor and modify the values as needed:

```json
{
  "platforms": {
    "instagram": "23,200+",
    "tiktok": "17,000+",
    "facebook": "16,000+",
    "youtube": "384+"
  },
  "demographics": {
    "gender": {
      "women": 80,
      "men": 20
    },
    "age": {
      "18-24": 24.5,
      "25-34": 30,
      "35-44": 28.9,
      "45+": 16.6
    }
  },
  "locations": {
    "fort-worth": 12.7,
    "dallas": 10.2,
    "arlington": 4.2,
    "houston": 2.3,
    "other": 70.6
  },
  "engagement": {
    "monthlyViews": "129K+",
    "engagements": "73.5K",
    "accountsReached": "48.5K",
    "peakActivity": "Saturdays, 4-5 PM",
    "topContent": "Instagram Reels"
  },
  "contentStats": {
    "totalReelViews": "50K+",
    "avgEngagementRate": "8.5%",
    "brandSatisfaction": "95%",
    "avgViewsPerReel": "15K+"
  },
  "lastUpdated": "2024-12-19"
}
```

### 3. Save and Refresh
After making changes:
1. Save the `analytics-data.json` file
2. Refresh the portfolio page in your browser
3. The new data will automatically load

## Data Fields Explained

### Platform Stats
- `instagram`, `tiktok`, `facebook`, `youtube`: Follower counts for each platform

### Demographics
- `gender`: Percentage breakdown by gender (women/men)
- `age`: Percentage breakdown by age groups

### Locations
- Geographic distribution of audience by city/region
- Percentages should add up to 100%

### Engagement Metrics
- `monthlyViews`: Total monthly video views
- `engagements`: Total likes, comments, shares
- `accountsReached`: Unique accounts reached
- `peakActivity`: Best time to post
- `topContent`: Most engaging content type

### Content Stats
- `totalReelViews`: Total views across all reels
- `avgEngagementRate`: Average engagement percentage
- `brandSatisfaction`: Client satisfaction rate
- `avgViewsPerReel`: Average views per individual reel

## Tips for Data Updates

1. **Keep formatting consistent**: Use "K+" for thousands, "%" for percentages
2. **Update regularly**: Change the `lastUpdated` field when making updates
3. **Backup before changes**: Keep a copy of the working file before major updates
4. **Test after updates**: Always check the portfolio page after making changes

## Future Enhancements

This system can be extended to:
- Connect to social media APIs for automatic updates
- Add a web-based admin interface
- Include more detailed analytics and charts
- Set up automated data refresh schedules

## Troubleshooting

If data doesn't update:
1. Check that the JSON file is valid (no syntax errors)
2. Ensure the file is saved in the correct location
3. Clear browser cache and refresh
4. Check browser console for any error messages
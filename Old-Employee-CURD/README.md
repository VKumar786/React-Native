<!-- Style with Props -->
<card style={[styles.card, props.style]}>


<!-- FireBase Data Security -->
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
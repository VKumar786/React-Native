<!--
    TODO: 18. Building Lists
    TODO: 19. The FlatList Element
    TODO: 21. Why a Key Property?
    ? if key is not provided then it will delete random item from page tree
    TODO: 22. Solving the Key Issue
    TODO: 23. A Few Props Around FlatList
    TODO: 24. Exercise Overview
    TODO: 25. Exercise Solution
 -->
 <FlatList
keyExtractor={(item) => item.name}
data={Data}
renderItem={({ item }) =>
    <Text
        style={{ margin: 100 }}>
        {item.name} - Age {item.age}
    </Text>
} />
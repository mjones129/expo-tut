import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string,
    onPress: () => void,
};

export default function IconButton({icon, label, onPress}: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    IconButton: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
})
/* eslint-disable react-native/no-inline-styles */
import React from "react"
import { Alert, Dimensions, Picker, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text } from "../../components"
import Style from "./TransactionCreation.style"
import { TextInput } from "react-native-gesture-handler"
import { color } from "../../theme"
import { GlobalContext } from "../../constants/CONTEXT"
import moment from "moment"
import { useStores } from "../../models"

export const TransactionCreationScreen = observer(function TransactionCreationScreen() {
  const { setGlobalState, state } = React.useContext(GlobalContext)
  const { transactionStore } = useStores()
  const TEMPLATE = state.user.template?.[Object.keys(state.user.template)[0]] || {}
  const TEMPLATE_NAME = state.user.template && Object.keys(state.user.template)[0]
  const [selectedCategory, setSelectedCategory] = React.useState(Object.keys(TEMPLATE)[0])
  const [formValues, setFormValues] = React.useState<{
    amount: number
    type: "IN" | "OUT"
    description: string
    from: string
    destination: string
  }>({
    amount: 0,
    type: "IN",
    description: "",
    from: "",
    destination: "",
  })
  const handler = {
    Add: () => {
      if (
        formValues.amount <= 0 ||
        (formValues.type === "OUT" &&
          formValues.amount > transactionStore.getTransactionBalance(state.user.transactions))
      ) {
        return Alert.alert("Amount is invalid")
      }
      if (formValues.description === "") {
        return Alert.alert("Description is invalid")
      }
      if (formValues.type === "IN") {
        if (formValues.from === "") {
          return Alert.alert("From address is invalid")
        }
      } else {
        if (formValues.destination === "") {
          return Alert.alert("Destination address is invalid")
        }
      }

      const transaction = {
        id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000 + "",
        amount: formValues.amount,
        createdAt: moment().unix(),
        currency: "VND" as any,
        description: formValues.description,
        from: formValues.type === "IN" ? formValues.from : "spendAccount",
        to: formValues.type === "IN" ? "spendAccount" : formValues.destination,
        type: formValues.type,
        category: selectedCategory,
      }

      setGlobalState({
        user: {
          ...state.user,
          transactions: (() => {
            state.user.transactions.push(transaction)
            return state.user.transactions
          })(),
          template: {
            ...state.user.template,
            [TEMPLATE_NAME]: {
              ...state.user.template[TEMPLATE_NAME],
              [selectedCategory]: {
                ...state.user.template[TEMPLATE_NAME][selectedCategory],
                data: (() => {
                  state.user.template[TEMPLATE_NAME][selectedCategory].data.push(transaction)
                  return state.user.template[TEMPLATE_NAME][selectedCategory].data
                })(),
              },
            },
          },
        },
      })
      Alert.alert("Transaction is added successfully!")
      setFormValues({
        amount: 0,
        type: "IN",
        description: "",
        from: "",
        destination: "",
      })
    },
  }
  return (
    <View testID="TransactionCreationScreen" style={Style.Container}>
      <Screen style={{ paddingHorizontal: 25 }}>
        <View>
          <Text>Số tiền</Text>
          <TextInput
            value={formValues.amount.toString()}
            onChangeText={(text) =>
              setFormValues({
                ...formValues,
                amount: parseInt(text.replace(/[^0-9]/g, "0")),
              })
            }
            style={{
              backgroundColor: color.palette.offWhite,
              paddingLeft: 20,
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 10,
            }}
            placeholder="Nhập vào số tiền của giao dịch"
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Button
            onPress={() =>
              setFormValues({
                ...formValues,
                type: "OUT",
              })
            }
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: formValues.type === "OUT" ? color.primary : color.palette.offWhite,
              paddingVertical: 10,
              borderRadius: 10,
              marginRight: 5,
            }}
          >
            <Text
              style={{
                color: formValues.type === "OUT" ? color.palette.white : color.palette.tintBlack,
              }}
            >
              Chuyển
            </Text>
          </Button>
          <Button
            onPress={() =>
              setFormValues({
                ...formValues,
                type: "IN",
              })
            }
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: formValues.type === "IN" ? color.primary : color.palette.offWhite,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: formValues.type === "IN" ? color.palette.white : color.palette.tintBlack,
              }}
            >
              Nạp
            </Text>
          </Button>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Mô tả</Text>
          <TextInput
            value={formValues.description.toString()}
            onChangeText={(text) =>
              setFormValues({
                ...formValues,
                description: text,
              })
            }
            style={{
              backgroundColor: color.palette.offWhite,
              paddingLeft: 20,
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 10,
            }}
            placeholder="Enter transaction description"
          />
        </View>
        {formValues.type === "IN" ? (
          <View style={{ marginTop: 20 }}>
            <Text>Từ</Text>
            <TextInput
              value={formValues.from.toString()}
              onChangeText={(text) =>
                setFormValues({
                  ...formValues,
                  from: text,
                })
              }
              style={{
                backgroundColor: color.palette.offWhite,
                paddingLeft: 20,
                paddingVertical: 10,
                marginTop: 10,
                borderRadius: 10,
              }}
              placeholder="From"
            />
          </View>
        ) : (
          <View style={{ marginTop: 20 }}>
            <Text>Đến</Text>
            <TextInput
              value={formValues.destination.toString()}
              onChangeText={(text) =>
                setFormValues({
                  ...formValues,
                  destination: text,
                })
              }
              style={{
                backgroundColor: color.palette.offWhite,
                paddingLeft: 20,
                paddingVertical: 10,
                marginTop: 10,
                borderRadius: 10,
              }}
              placeholder="To"
            />
          </View>
        )}
        {Object.keys(TEMPLATE).length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text>Category</Text>
            <View style={{ alignItems: "center" }}>
              <Picker
                selectedValue={selectedCategory}
                style={{ height: 50, width: Dimensions.get("screen").width }}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
              >
                {Object.keys(TEMPLATE).map((category) => (
                  <Picker.Item key={category} label={category} value={category} />
                ))}
              </Picker>
            </View>
          </View>
        )}

        <Button
          onPress={handler.Add}
          style={{
            backgroundColor: color.primary,
            marginTop: TEMPLATE ? 120 : 20,
            paddingVertical: 15,
          }}
        >
          <Text style={{ color: color.palette.white }}>Thêm giao dịch</Text>
        </Button>
      </Screen>
    </View>
  )
})

/**
	* {
      id: "100000",
      amount: 2000000,
      type: "IN",
      createdAt: moment().startOf("month").subtract(1, "month").unix(),
      description: "Transfer from bank account",
      from: "Sacombank",
      to: "spendAccount",
    },
 */

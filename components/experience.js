import React from 'react'
import { View, Text, Image } from 'react-native'
import Unorderedlist from 'react-native-unordered-list'
import theme from '../utils/theme'

export default () => (
  <View style={{ marginHorizontal: 8, marginTop: 3 }}>
    {data.map((ele) => (
      <ExperienceCard
        label={ele.label}
        position={ele.position}
        positionlabel={ele.positionlabel}
        meta={ele.meta}
        key={ele.label}
      />
    ))}
    {historydata.map((ele) => (
      <History
        label={ele.label}
        history={ele.history}
        style={{ marginTop: 6, marginBottom: 6 }}
      />
    ))}
  </View>
)

const ExperienceCard = ({
  label = 'N/A',
  position = 'N/A',
  positionlabel = 'N/A',
  meta = ['N/A'],
}) => (
  <Cont>
    <Title label={label} />
    <View style={{ paddingTop: 10 }}>
      <Text
        style={{
          color: theme.color.white1,
          fontSize: 17,
          fontStyle: 'italic',
        }}>
        {position}
      </Text>
      <Text style={{ color: theme.color.label, marginTop: 1 }}>
        {positionlabel}
      </Text>
    </View>
    <View style={{ marginTop: 4 }}>
      {meta.map((ele) => (
        <Unorderedlist
          color={theme.color.label}
          style={{ paddingVertical: 5 }}
          key={ele}>
          <Text
            key={ele + 'Text'}
            style={{
              fontSize: 16,
              color: theme.color.white1,
              paddingVertical: 5,
            }}>
            {ele}
          </Text>
        </Unorderedlist>
      ))}
    </View>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
      }}>
      <Text style={{ fontSize: 15, color: 'white' }}> More </Text>
      <Image
        source={require('../assets/downwhite.png')}
        style={{ marginLeft: 2, width: 16, height: 8 }}
      />
    </View>
  </Cont>
)

const Cont = ({ children, style }) => (
  <View
    style={{
      paddingVertical: 15,
      backgroundColor: theme.color.grey1,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 3,
      ...style,
    }}>
    {children}
  </View>
)

const Title = ({ label }) => (
  <View
    style={{
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: theme.color.bordergrey,
    }}>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
      {label}
    </Text>
  </View>
)

const HistoryMeta = ({ lable, meta }) => (
  <View
    style={{
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: theme.color.bordergrey,
    }}>
    <Text
      style={{
        color: theme.color.white1,
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic',
        paddingVertical: 5,
      }}>
      {lable}
    </Text>
    <Text
      style={{
        color: theme.color.white1,
        //      fontWeight: 'bold',
        fontSize: 14,
        //     fontStyle: 'italic',
        paddingVertical: 2,
      }}>
      {meta}
    </Text>
  </View>
)

const History = ({ label, history = [], style = {} }) => (
  <Cont style={style}>
    <Title label={label} />
    {history.map((ele) => (
      <HistoryMeta lable={ele.label} meta={ele.meta} />
    ))}
  </Cont>
)

const data = [
  {
    label: 'Work Experience',
    position: 'Social Media Officer',
    positionlabel: 'San Dias Online Inc. | August 2019 - Present',
    meta: [
      'Assists the department head in carrying out digital marketing campaigns',
      'Works closely with the marketing head for digital promotions and other materials',
    ],
  },
]

const historydata = [
  {
    label: 'Academic History',
    history: [
      {
        label: 'Elyuris Training Center',
        meta: 'Certificate of Completion | Media Marketing',
      },
      {
        label: 'Pedigon High School',
        meta: 'Scholar | 3rd Year High School Student',
      },
    ],
  },
]

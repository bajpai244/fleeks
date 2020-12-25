import React from 'react'
import { View, Text } from 'react-native'
import theme from '../utils/theme'

export default ({ data }) => (
  <View style={{ marginTop: 3 }}>
    {data.skills.map((ele, index) => (
      <SkillComp
        label={ele.skill_name}
        perc={ele.skill_level}
        perccolor={datacomp[index].perccolor}
      />
    ))}
  </View>
)

const SkillComp = ({
  label = '',
  perc = 0,
  perccolor = theme.color.primary,
}) => (
  <View
    style={{
      paddingVertical: 15,
      marginHorizontal: 8,
      marginVertical: 4,
      paddingHorizontal: 20,
      backgroundColor: theme.color.grey1,
      borderRadius: 5,
    }}>
    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
      {label}
    </Text>
    <PercShower perc={perc} perccolor={perccolor} />
  </View>
)

const PercShower = ({ perc, perccolor }) => (
  <View style={{}}>
    <View
      style={{
        height: 8,
        marginTop: 10,
        backgroundColor: '#1c1c1c',
        flexDirection: 'row',
        borderRadius: 10,
      }}>
      <View
        style={{
          width: `${perc}%`,
          backgroundColor: perccolor,
          borderRadius: 10,
        }}
      />
    </View>
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <LevelLabel text='Beginner' />
      <LevelLabel text='Skillful' style={{ alignItems: 'center' }} />
      <LevelLabel text='Expert' style={{ alignItems: 'flex-end' }} />
    </View>
  </View>
)

const LevelLabel = ({ text = 'no level', style = {} }) => (
  <View style={{ flex: 1, ...style }}>
    <Text style={{ color: theme.color.label, fontSize: 10 }}>{text}</Text>
  </View>
)

const datacomp = [
  { label: 'Design', perc: 61, perccolor: theme.color.percblue },
  { label: 'Marketing', perc: 31, perccolor: theme.color.percred },
  { label: 'Coding', perc: 91, perccolor: theme.color.pergreen },
  { label: 'Sales', perc: 34, perccolor: theme.color.percdeepblue },
]

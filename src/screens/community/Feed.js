import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import PostPictuer from '../../assets/svg/Post/post.svg';
import Like from '../../assets/svg/Post/like.svg';
import Comment from '../../assets/svg/Post/comment.svg';
import ReadMore from '../../assets/svg/Post/read.svg';
import Dots from '../../assets/svg/common/dots.svg';
import FollwImage from '../../assets/svg/common/followplus.png';

import styles from './style';

export default function Feed({data}) {
  const [loadMore, setLoadMore] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const onTextLayout = useCallback(
    e => {
      if (numOfLines === 0) setNumOfLines(e.nativeEvent.lines.length);
    },
    [numOfLines],
  );

  const onLoadMoreToggle = () => {
    setLoadMore(!loadMore);
  };

  const PostItem = ({item, index}) => {
    let str = item?.name;
    let matches = str.match(/\b(\w)/g);
    let UserName = matches.join('');

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={[styles.row]}>
            <View>
              <View style={styles.namecontain}>
                <Text style={styles.namecontaintext}>{UserName}</Text>
              </View>
              {/* <View style={styles.follow}>
                            <TouchableOpacity>
                                <Image source={FollwImage} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View> */}
            </View>

            <View style={{marginLeft: 5}}>
              <Text style={styles.name}>
                {'  '}
                {item?.name}
              </Text>
              <Text style={styles?.time}>
                {'  '}
                {item?.time}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.followMe}>
            <Text style={styles.follwtext}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text
            style={styles.desc}
            numberOfLines={numOfLines === 0 ? null : loadMore ? numOfLines : 2}
            onTextLayout={onTextLayout}>
            {item?.descr}
          </Text>

          {numOfLines > 2 && (
            <TouchableOpacity
              style={[styles.row, {marginTop: -10}]}
              onPress={onLoadMoreToggle}>
              <Text style={styles.ReadMore}>
                {loadMore ? 'Read Less' : 'Read More'}{' '}
              </Text>
              <ReadMore />
            </TouchableOpacity>
          )}
        </View>

        <PostPictuer style={{alignSelf: 'center', width: '100%'}} />

        <View
          style={[
            styles.row,
            {padding: 10, justifyContent: 'space-between', marginTop: -5},
          ]}>
          <View style={[styles.row]}>
            <Like />
            <Text>
              {'  '}
              {item?.like}
            </Text>
            <Text>{'     '}</Text>
            <Comment />
            <Text>
              {'  '}
              {item?.comment}
            </Text>
          </View>

          <Dots />
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        contentContainerStyle={[styles.flatlist]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <PostItem item={item} index={index} />}
      />
    </>
  );
}

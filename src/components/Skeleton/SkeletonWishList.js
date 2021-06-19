import React from "react";
import { View, Text } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
export default function SkeletonWishList() {
    return (
        <>
        <SkeletonPlaceholder speed={1000} >
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={5} />
          <SkeletonPlaceholder.Item marginLeft={20} height={40} >
            <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={6} width={180} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder speed={1000}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={5} />
          <SkeletonPlaceholder.Item marginLeft={20} height={40} >
            <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={6} width={180} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
        </>
    );
}

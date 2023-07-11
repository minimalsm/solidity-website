import { AspectRatio, Box, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { ButtonLink } from '@/components'
import type { EventFrontmatter } from '@/interfaces'
import { MdPlayArrow } from 'react-icons/md'
import Image from '../components/CustomImage'

interface EventCardProps extends FlexProps {
  frontmatter: EventFrontmatter
}
export const EventCard: React.FC<EventCardProps> = ({
  frontmatter,
  ...flexProps
}) => {
  const { title, location, startDate, endDate, links, imageSrc } = frontmatter
  const start = new Date(startDate)
  const end = new Date(endDate)
  const date = `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
  return (
    <Flex direction="column" maxW="container.md" {...flexProps} h="100%">
      <AspectRatio ratio={4 / 3} width="full">
        <Image
          src={imageSrc ? imageSrc : '/assets/default-event-image.png'}
          layout="fill"
          objectFit="cover"
          alt="Solidity event image"
        />
      </AspectRatio>
      <Flex direction="column" px={0} pt={4} gap={2} h="full">
        <Text textStyle="h5-mono" color="text">
          {title}
        </Text>
        <Box color="primary">
          <Text>{location}</Text>
          <Text>{date}</Text>
        </Box>
        <Spacer />
        <Flex gap={4} mt={6}>
          {links &&
            links.map(({ href, label }) => (
              <ButtonLink
                href={href}
                key={href}
                w="fit-content"
                variant="outline"
                flexWrap="nowrap"
                alignItems="center"
              >
                <Flex flexWrap="nowrap" me="auto" alignItems="center">
                  {label.toLowerCase() === 'talks' && (
                    <Icon as={MdPlayArrow} me={2} />
                  )}
                  {label}
                </Flex>
              </ButtonLink>
            ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

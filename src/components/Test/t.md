{/_ <GradientOverlay
src={
isScreenSmallerThan767
? 'FeaturesGradientMobile.png'
: 'FeaturesSectionGradient.png'
}
/>
<FeaturesSectionHero>
<FeaturesSectionHeroTitle>
<Badge>Features</Badge>
<Text
fontSize={isScreenExtraSmall ? 28 : 56}
fontWeight="bold"
align="left" >
Unleash the Power of Automated Portfolio <br />
Management
</Text>
</FeaturesSectionHeroTitle>
<FeaturesSectionHeroDescription>
<Text
fontSize={isScreenExtraSmall ? 14 : 16}
fontWeight="light"
align="left" >
Emeth brings to you a meticulously crafted suite of
features designed to elevate your DeFi operations and
digital asset management experience. From intuitive
portfolio setups to intelligent automation. <br />
<br />
Explore a universe where every click brings you closer
to unparalleled efficiency, insightful decisions, and
robust financial management, all unified under one
comprehensive platform.
</Text>
</FeaturesSectionHeroDescription>
</FeaturesSectionHero> _/}
{/_ <Parallax className="parallax-container" pages={5}> _/}
{/_ <ParallaxLayer> _/}
{/_ <Background /> _/}
{/_ </ParallaxLayer> _/}
{/_ {features.map((feature) => (
<TestFeature
key={feature.id}
title={feature.title}
description={feature.description}
imageUrl={feature.imageUrl}
gradientUrl={feature.gradientUrl}
icon={feature.icon}
offset={feature.offset}
refValue={(() => {
switch (feature.offset) {
case 1:
return ref
case 2:
return ref2
case 3:
return ref3
default:
return null
}
})()}
/>
))} _/}

            {/* <ParallaxLayer sticky={{ start: 0, end: 3.5 }}>
                    <ImagesWrapper>
                        <FeatureImage src={imgSrc} alt="s" />
                    </ImagesWrapper>
                </ParallaxLayer> */}
            {/* </Parallax> */}
